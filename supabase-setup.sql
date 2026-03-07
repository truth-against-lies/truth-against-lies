-- ============================================
-- Truth Against Lies — Supabase Database Setup
-- Run this entire script in Supabase SQL Editor
-- ============================================

-- ============================================
-- TABLE 1: page_views (visitor analytics)
-- ============================================
CREATE TABLE public.page_views (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    page text NOT NULL,
    referrer text,
    language text,
    screen_width integer,
    visitor_id text,
    created_at timestamptz DEFAULT now()
);

ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert page views"
    ON public.page_views FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Admin can read page views"
    ON public.page_views FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    );

-- ============================================
-- TABLE 2: profiles (extends auth.users)
-- ============================================
CREATE TABLE public.profiles (
    id uuid REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email text,
    display_name text,
    role text DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    is_blocked boolean DEFAULT false,
    created_at timestamptz DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
    ON public.profiles FOR SELECT
    TO authenticated
    USING (id = auth.uid());

CREATE POLICY "Admin can read all profiles"
    ON public.profiles FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    );

CREATE POLICY "Admin can update all profiles"
    ON public.profiles FOR UPDATE
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    )
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    );

CREATE POLICY "Users can update own display name"
    ON public.profiles FOR UPDATE
    TO authenticated
    USING (id = auth.uid())
    WITH CHECK (id = auth.uid());

-- ============================================
-- TABLE 3: protected_content
-- ============================================
CREATE TABLE public.protected_content (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    title text NOT NULL,
    content_html text NOT NULL,
    section text DEFAULT 'general',
    display_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.protected_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Non-blocked authenticated users can read active content"
    ON public.protected_content FOR SELECT
    TO authenticated
    USING (
        is_active = true
        AND NOT EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.is_blocked = true
        )
    );

CREATE POLICY "Admin full access to protected content"
    ON public.protected_content FOR ALL
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    )
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    );

-- ============================================
-- TABLE 4: donations
-- ============================================
CREATE TABLE public.donations (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    amount numeric(10,2) NOT NULL,
    currency text DEFAULT 'USD',
    donor_name text,
    donor_email text,
    note text,
    source text DEFAULT 'buymeacoffee',
    created_at timestamptz DEFAULT now()
);

ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin full access to donations"
    ON public.donations FOR ALL
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    )
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    );

-- ============================================
-- AUTO-CREATE PROFILE TRIGGER
-- IMPORTANT: Replace YOUR_ADMIN_EMAIL with your actual email!
-- ============================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    INSERT INTO public.profiles (id, email, display_name, role)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)),
        CASE
            WHEN NEW.email = 'ethankinng666@gmail.com' THEN 'admin'
            ELSE 'user'
        END
    );
    RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- HELPER VIEW: daily stats for admin dashboard
-- ============================================
CREATE OR REPLACE VIEW public.daily_stats AS
SELECT
    date_trunc('day', created_at)::date AS day,
    page,
    COUNT(*) AS views,
    COUNT(DISTINCT visitor_id) AS unique_visitors
FROM public.page_views
GROUP BY date_trunc('day', created_at)::date, page
ORDER BY day DESC;
