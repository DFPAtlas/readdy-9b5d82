import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthColumn } from '@/components/marketing/AuthColumn';
import { supabase } from '@/lib/supabase/client';

/**
 * Handles the return from the magic-link email.
 *
 * The link carries a single-use `code`. We exchange it for a session, then send
 * the parent to /app/today. An expired or already-used link is a normal path,
 * not an error state — it drops back to /login with a message.
 */
export default function AuthCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const handled = useRef(false);

  const code = searchParams.get('code');
  const linkError =
    searchParams.get('error') ?? searchParams.get('error_description');

  useEffect(() => {
    if (handled.current) return;
    handled.current = true;

    const goToExpired = () => {
      navigate('/login?expired=1', { replace: true });
    };

    if (!code || linkError) {
      goToExpired();
      return;
    }

    const complete = async () => {
      try {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) {
          goToExpired();
          return;
        }
        navigate('/app/today', { replace: true });
      } catch {
        goToExpired();
      }
    };

    void complete();
  }, [code, linkError, navigate]);

  return (
    <>
      <title>Signing you in · Dueby</title>

      <AuthColumn>
        <h1 className="font-display text-[26px] leading-[1.15] font-semibold text-ink">
          Signing you in…
        </h1>
        <p className="text-[17px] text-ink-2">
          Hang on a moment while we finish signing you in.
        </p>
      </AuthColumn>
    </>
  );
}