import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { StatusPill } from '@/components/ui/StatusPill';
import { SubjectTag } from '@/components/ui/SubjectTag';
import { Container } from '@/components/marketing/Container';

const basePath = __BASE_PATH__.split('/').filter(Boolean).join('/');
const pathPrefix = basePath ? `/${basePath}` : '';

const WEEK_BARS = [
  { day: 'Mon', height: 63, fill: 'accent' },
  { day: 'Tue', height: 40, fill: 'accent' },
  { day: 'Wed', height: 34, fill: 'accent' },
  { day: 'Thu', height: 23, fill: 'accent' },
  { day: 'Fri', height: 4, fill: 'line' },
];

const TONIGHT_TASKS = [
  { subject: 'History', title: 'Source questions', status: 'overdue' as const },
  { subject: 'Maths', title: 'Adding fractions', status: 'todo' as const },
];

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-paper py-14 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <p className="text-[16px] font-bold text-accent">
              Homework for UK secondary schools
            </p>

            <h1 className="font-display text-[34px] leading-[1.02] font-semibold text-ink lg:text-[72px]">
              Homework, made clear.
            </h1>

            <p className="max-w-[520px] text-[21px] text-ink-2">
              One calm screen that shows what&apos;s due tonight, how it went, and how to help
              at home. For parents, pupils and teachers, without the app overload.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                href={`${pathPrefix}/demo`}
                onClick={(event) => {
                  event.preventDefault();
                  navigate('/demo');
                }}
              >
                Book a demo for your school
              </Button>

              <Button
                variant="outline"
                size="lg"
                href={`${pathPrefix}/login`}
                onClick={(event) => {
                  event.preventDefault();
                  navigate('/login');
                }}
              >
                Parent log in
              </Button>
            </div>

            <p className="text-[15px] text-ink-3">
              Parents don&apos;t need a password. You sign in with a link sent to your email.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              role="img"
              aria-label="Preview of the parent app"
              className="w-full max-w-[360px] rounded-[40px] border-[10px] border-ink bg-paper p-[22px]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[20px] font-semibold text-ink">Dueby</span>
                  <span aria-hidden="true" className="h-7 w-7 rounded-full bg-line" />
                </div>

                <div className="flex gap-2">
                  <div className="flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-ink text-[14px] font-bold text-accent-ink">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: '#F59E0B' }}
                    />
                    Maya · Y9
                  </div>
                  <div className="flex h-10 flex-1 items-center justify-center gap-2 rounded-full border-2 border-line-strong bg-surface text-[14px] font-bold text-ink">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: '#34D399' }}
                    />
                    Sam · Y7
                  </div>
                </div>

                <Card tone="warn" padding="sm">
                  <p className="text-[17px] font-bold">1 thing needs a look</p>
                  <p className="text-[13px] text-ink-2">
                    History source questions were due Friday. They&apos;re in tonight&apos;s
                    plan.
                  </p>
                </Card>

                <div className="flex items-baseline justify-between">
                  <p className="text-[16px] font-bold text-ink">Tonight</p>
                  <p className="text-[13px] text-ink-3">about 55 min</p>
                </div>

                <div className="flex flex-col gap-2">
                  {TONIGHT_TASKS.map((task) => (
                    <div
                      key={task.title}
                      className="flex items-center justify-between gap-2 rounded-md border border-line bg-surface px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <SubjectTag subject={task.subject} />
                        <span className="text-[14px] font-bold text-ink">{task.title}</span>
                      </div>
                      <StatusPill status={task.status} />
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-line bg-surface p-4">
                  <p className="text-[15px] font-bold text-ink">This week</p>

                  <div className="mt-3 flex items-end gap-2" style={{ height: '56px' }}>
                    {WEEK_BARS.map((bar) => (
                      <div
                        key={bar.day}
                        className={
                          bar.fill === 'accent'
                            ? 'flex-1 rounded-t-sm bg-accent'
                            : 'flex-1 rounded-t-sm bg-line-strong'
                        }
                        style={{ height: `${bar.height}%` }}
                      />
                    ))}
                  </div>

                  <div className="mt-1 flex gap-2">
                    {WEEK_BARS.map((bar) => (
                      <span
                        key={bar.day}
                        className="flex-1 text-center text-[12px] font-bold text-ink-3"
                      >
                        {bar.day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}