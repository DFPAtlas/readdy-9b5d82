import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { AuthColumn } from '@/components/marketing/AuthColumn';

const basePath = __BASE_PATH__.split('/').filter(Boolean).join('/');
const pathPrefix = basePath ? `/${basePath}` : '';

function EnvelopeIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4.5" y="7.5" width="23" height="17" rx="3" />
      <path d="m5.5 10 9.3 6.5a2 2 0 0 0 2.4 0L26.5 10" />
    </svg>
  );
}

export default function CheckEmail() {
  const navigate = useNavigate();

  return (
    <>
      <title>Check your email · Dueby</title>

      <AuthColumn>
        <div className="flex flex-col gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-accent">
            <EnvelopeIcon />
          </div>

          <h1 className="font-display text-[32px] leading-[1.12] font-semibold text-ink">
            Check your email
          </h1>

          <p className="text-[17px] text-ink-2">
            We&apos;ve sent you a sign-in link. It works once and expires in 15 minutes.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            size="lg"
            className="w-full"
            href={`${pathPrefix}/app/today`}
            onClick={(event) => {
              event.preventDefault();
              navigate('/app/today');
            }}
          >
            Open the link (demo)
          </Button>

          <Button
            variant="quiet"
            className="w-full"
            href={`${pathPrefix}/login`}
            onClick={(event) => {
              event.preventDefault();
              navigate('/login');
            }}
          >
            Use a different email
          </Button>
        </div>

        <p className="text-[15px] text-ink-3">
          No email after a minute? Check your junk folder, then ask the school office which
          address they hold for you.
        </p>
      </AuthColumn>
    </>
  );
}