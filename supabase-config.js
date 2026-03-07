// ============================================
// Truth Against Lies — Supabase Configuration
// Shared client used by all pages
// ============================================

const SUPABASE_URL = 'https://breomyiblebynpnmhirj.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Q4_Osox2gvB37KbQzeW5sw_zSnUffyk';

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ========== VISITOR TRACKING ==========

function getVisitorId() {
    var vid = localStorage.getItem('tal_visitor_id');
    if (!vid) {
        vid = crypto.randomUUID();
        localStorage.setItem('tal_visitor_id', vid);
    }
    return vid;
}

async function trackPageView(pageName) {
    try {
        await _supabase.from('page_views').insert({
            page: pageName,
            referrer: document.referrer || null,
            language: navigator.language || null,
            screen_width: window.innerWidth,
            visitor_id: getVisitorId()
        });
    } catch (e) {
        // Silent fail — tracking should never break the site
    }
}

// ========== AUTH HELPERS ==========

async function getCurrentUser() {
    var result = await _supabase.auth.getUser();
    return result.data.user;
}

async function getUserProfile() {
    var user = await getCurrentUser();
    if (!user) return null;
    var result = await _supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
    return result.data;
}

async function isUserBlocked() {
    var profile = await getUserProfile();
    return profile ? profile.is_blocked : false;
}

async function talSignUp(email, password, displayName) {
    var result = await _supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: { display_name: displayName }
        }
    });
    if (result.error) throw result.error;
    return result.data;
}

async function talSignIn(email, password) {
    var result = await _supabase.auth.signInWithPassword({
        email: email,
        password: password
    });
    if (result.error) throw result.error;
    // Check if blocked
    var profile = await getUserProfile();
    if (profile && profile.is_blocked) {
        await _supabase.auth.signOut();
        throw new Error('BLOCKED');
    }
    return result.data;
}

async function talSignOut() {
    await _supabase.auth.signOut();
}

// ========== PROTECTED CONTENT ==========

async function loadProtectedContent() {
    var result = await _supabase
        .from('protected_content')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });
    if (result.error) return [];
    return result.data || [];
}

// ========== AUTH STATE LISTENER ==========

function onAuthChange(callback) {
    _supabase.auth.onAuthStateChange(function(event, session) {
        callback(event, session);
    });
}
