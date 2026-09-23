import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { AuthColumn } from '@/components/marketing/AuthColumn';
import { getSessionUser, signOut } from '@/lib/auth';

/**
 * Shown when someone signs in successfully but matches no person.
 * Deliberately thin: the school is the route, not us. No support address.
 */
export default function NoAccess() {
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      const user = await getSessionUser();
      if (!cancelled && !user) {
        navigate('/login', { replace: true });
      }
    };

    void check();

    return () => {
      cancelled = true;
    };
  }, [navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/', { replace: true });
  };

  return (
    <>
      <title>Not recognised · Dueby</title>

      <AuthColumn>
        <span className="font-display text-[26px] font-semibold leading-none text-ink">
          Dueby
        </span>

        <div className="flex flex-col gap-3">
          <h1 className="font-display text-[32px] leading-[1.12] font-semibold text-ink">
            We don&apos;t recognise this email yet
          </h1>

          <p className="text-[17px] text-ink-2">
            You&apos;re signed in, but your school hasn&apos;t linked this address to a
            pupil. Ask the school office to check the email address they hold for you.
          </p>
        </div>

        <Button variant="quiet" className="w-full" onClick={handleSignOut}>
          Sign out
        </Button>
      </AuthColumn>
    </>
  );
}