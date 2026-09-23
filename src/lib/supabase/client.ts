import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY as
  | string
  | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase is not configured. Missing VITE_PUBLIC_SUPABASE_URL or VITE_PUBLIC_SUPABASE_ANON_KEY.',
  );
}

/**
 * The single browser Supabase client for the whole app.
 *
 * Only the publishable (anon) key lives here. It is designed to be public and
 * is protected by row-level security. The service role key must NEVER appear in
 * anything that reaches the browser.
 *
 * detectSessionInUrl is deliberately off: the magic-link code is exchanged
 * explicitly by the /auth/callback route, so we do not want the client trying
 * to consume it in the background and racing the route.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
    flowType: 'pkce',
  },
});

export default supabase;