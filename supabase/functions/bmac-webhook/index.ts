import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

Deno.serve(async (req) => {
  // Only accept POST
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const body = await req.json();
    const event = req.headers.get("x-bmc-event") || "unknown";
    const data = body.response || body;

    // Only process coffee purchases (donations)
    if (event !== "coffee_purchase" && event !== "unknown") {
      return new Response(JSON.stringify({ status: "skipped", event }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Extract fields from BMAC payload
    const amount = parseFloat(data.total_amount || data.amount || "0");
    const donorName = data.supporter_name || data.payer_name || data.name || null;
    const donorEmail = data.supporter_email || data.payer_email || data.email || null;
    const note = data.support_note || data.support_message || data.note || data.message || null;
    const currency = data.support_currency || data.currency || "USD";

    if (amount <= 0) {
      return new Response(JSON.stringify({ status: "skipped", reason: "zero amount" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Insert into Supabase using service role key (bypasses RLS)
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error } = await supabase.from("donations").insert({
      amount,
      currency: currency.toUpperCase(),
      donor_name: donorName,
      donor_email: donorEmail,
      note,
      source: "buymeacoffee",
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return new Response(JSON.stringify({ status: "error", message: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log(`Donation recorded: $${amount} from ${donorName || "anonymous"}`);

    return new Response(
      JSON.stringify({ status: "ok", amount, donor: donorName }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response(
      JSON.stringify({ status: "error", message: String(err) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
