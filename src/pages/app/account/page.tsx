import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getSessionUser, signOut } from '@/lib/auth';

export default function Account() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const user = await getSessionUser();
      if (!cancelled) {
        setEmail(user?.email ?? '');
      }
    };

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleSignOut = async () => {
    if (signingOut) return;
    setSigningOut(true);
    await signOut();
    navigate('/', { replace: true });
  };

  return (
    <>
      <title>Account · Dueby</title>

      <div className="mx-auto flex w-full max-w-[640px] flex-col gap-6">
        <h1 className="font-display text-[26px] leading-none font-semibold text-ink">
          Account
        </h1>

        <Card>
          <p className="text-[15px] text-ink-3">Signed in as</p>
          <p className="text-[16px] font-bold text-ink">{email}</p>
        </Card>

        <div>
          <Button variant="outline" disabled={signingOut} onClick={handleSignOut}>
            Sign out
          </Button>
        </div>

        <p className="text-[15px] text-ink-3">
          Your school controls what you can see here. To change your email address, ask
          the school office.
        </p>
      </div>
    </>
  );
}