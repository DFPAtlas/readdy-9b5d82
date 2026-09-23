import { useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { AuthColumn } from '@/components/marketing/AuthColumn';
import { supabase } from '@/lib/supabase/client';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ChevronLeftIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.5 5.5 8 12l6.5 6.5" />
    </svg>
  );
}

const SEND_FAILED =
  "We couldn't send the link just now. Try again in a minute.";

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const expired = searchParams.get('expired') === '1';

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (submitting) return;

    const value = (inputRef.current?.value ?? email).trim();

    if (!EMAIL_PATTERN.test(value)) {
      setError('Enter the email address your school has for you.');
      inputRef.current?.focus();
      return;
    }

    setError('');
    setSubmitting(true);

    try {
      const basePath = __BASE_PATH__.split('/').filter(Boolean).join('/');
      const pathPrefix = basePath ? `/${basePath}` : '';

      const { error: sendError } = await supabase.auth.signInWithOtp({
        email: value,
        options: {
          emailRedirectTo: `${window.location.origin}${pathPrefix}/auth/callback`,
        },
      });

      // The same message either way — never reveal whether an address is known.
      if (sendError) {
        setError(SEND_FAILED);
        setSubmitting(false);
        return;
      }

      navigate('/login/check-email');
    } catch {
      setError(SEND_FAILED);
      setSubmitting(false);
    }
  };

  return (
    <>
      <title>Parent log in · Dueby</title>

      <AuthColumn>
        <Link
          to="/"
          className="inline-flex h-11 w-fit items-center gap-2 text-[16px] font-bold text-accent"
        >
          <ChevronLeftIcon />
          Dueby home
        </Link>

        <div className="flex flex-col gap-3">
          <span className="font-display text-[26px] font-semibold leading-none text-ink">
            Dueby
          </span>

          <h1 className="font-display text-[32px] leading-[1.12] font-semibold text-ink">
            Sign in to see your child&apos;s homework
          </h1>

          <p className="text-[17px] text-ink-2">
            Use the email address your school has for you. We&apos;ll send you a link, so
            there&apos;s no password to remember.
          </p>
        </div>

        {expired ? (
          <p className="rounded-lg bg-warn-bg px-4 py-3 text-[15px] text-warn-ink">
            That link has expired. Enter your email and we&apos;ll send a new one.
          </p>
        ) : null}

        <form className="flex flex-col gap-5" noValidate onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[16px] font-bold text-ink">
              Email address
            </label>

            <input
              id="email"
              ref={inputRef}
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (error) {
                  setError('');
                }
              }}
              aria-invalid={error ? 'true' : undefined}
              aria-describedby={error ? 'email-error' : undefined}
              className="h-[56px] w-full rounded-lg border-2 border-line-strong bg-surface px-4 text-[18px] text-ink placeholder:text-ink-3 focus:border-accent"
            />

            {error ? (
              <p id="email-error" className="text-[15px] text-poor-ink">
                {error}
              </p>
            ) : null}
          </div>

          <Button
            size="lg"
            className="w-full"
            disabled={submitting}
            onClick={handleSubmit}
          >
            {submitting ? 'Sending…' : 'Send me a sign-in link'}
          </Button>
        </form>

        <p className="text-[15px] text-ink-3">
          Can&apos;t sign in? Your school office can check which email address they have for
          you.
        </p>
      </AuthColumn>
    </>
  );
}