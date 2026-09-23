import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { LoadBar } from '@/components/ui/LoadBar';
import { TaskRow } from '@/components/parent/TaskRow';
import { useSelectedChild } from '@/components/parent/ChildProvider';
import {
  WEEK_DAYS,
  markedTasks,
  minutesForNight,
  overdueTask,
  tasksForNight,
} from '@/lib/demo-data';

function AlertIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.75v5" />
      <path d="M12 16.1h.01" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8.25 12.25 2.5 2.5 5-5.5" />
    </svg>
  );
}

export default function Today() {
  const navigate = useNavigate();
  const { child } = useSelectedChild();

  const overdue = overdueTask(child);
  const tonight = tasksForNight(child, 'mon');
  const tonightMinutes = minutesForNight(child, 'mon');
  const marked = markedTasks(child);

  return (
    <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 pb-6 lg:gap-8">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
        <div>
          <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">Your parent view</p>
          <h1 className="text-[32px] leading-tight text-ink md:text-[44px]">Today for {child.name}</h1>
          <p className="mt-2 text-[16px] text-ink-2">A clear picture of what needs doing and how the week is shaping up.</p>
        </div>
        <div className="rounded-xl border border-line bg-surface px-5 py-3">
          <p className="text-[13px] font-bold text-ink-3">Planned tonight</p>
          <p className="font-display text-[25px] font-semibold text-ink">{tonightMinutes} <span className="font-sans text-[14px] font-normal">min</span></p>
        </div>
      </div>

      <Card tone={overdue ? 'warn' : 'good'} className="md:p-6">
        <div className="flex items-start gap-3">
          <span
            className={
              overdue
                ? 'flex h-[26px] w-[26px] shrink-0 items-center justify-center text-warn-ink'
                : 'flex h-[26px] w-[26px] shrink-0 items-center justify-center text-good-ink'
            }
          >
            {overdue ? <AlertIcon /> : <CheckIcon />}
          </span>

          <div className="flex flex-col gap-3">
            <p className="text-[21px] font-bold text-ink">
              {overdue ? '1 thing needs a look' : 'All on track'}
            </p>

            <p className="text-[15px] text-ink-2">
              {overdue
                ? `${overdue.subject}: “${overdue.title}” was due ${overdue.due}. It’s in tonight’s plan.`
                : `Nothing overdue. Tonight’s plan is about ${tonightMinutes} minutes.`}
            </p>

            {overdue ? (
              <Button
                className="w-fit"
                href={`/app/homework/${overdue.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(`/app/homework/${overdue.id}`);
                }}
              >
                See what&apos;s overdue
              </Button>
            ) : null}
          </div>
        </div>
      </Card>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8">
      <div className="flex min-w-0 flex-col gap-8">
      <section className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-[26px] text-ink">Tonight</h2>
          <p className="text-[15px] text-ink-3">about {tonightMinutes} min</p>
        </div>

        {tonight.length ? (
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {tonight.map((task) => <li key={task.id}><TaskRow task={task} /></li>)}
          </ul>
        ) : (
          <Card tone="quiet"><p className="font-bold text-ink">Nothing planned tonight</p><p className="text-[15px] text-ink-2">You can still look ahead at the rest of the week.</p></Card>
        )}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-[26px] text-ink">Recently marked</h2>

        {marked.length ? (
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {marked.map((task) => <li key={task.id}><TaskRow task={task} /></li>)}
          </ul>
        ) : <p className="rounded-xl border border-dashed border-line-strong p-5 text-[15px] text-ink-3">No marked homework to show yet.</p>}
      </section>

      <p className="text-[15px] text-ink-3">
        Every mark is checked by your child&apos;s teacher before you see it.
      </p>
      </div>

      <Link to="/app/week" className="block lg:sticky lg:top-[84px]">
        <Card className="transition-colors hover:border-line-strong">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-[19px] font-bold text-ink">This week</p>
            <span className="text-[15px] font-bold text-accent">See the week</span>
          </div>

          <div className="grid grid-cols-5 gap-[10px]">
            {WEEK_DAYS.map((day) => {
              const minutes = minutesForNight(child, day.key);

              return (
                <div key={day.key} className="flex flex-col items-center gap-2">
                  <LoadBar
                    minutes={minutes}
                    guide={child.nightlyGuide}
                    orientation="vertical"
                  />
                  <span
                    className={
                      day.isToday
                        ? 'text-[14px] font-bold text-accent'
                        : 'text-[14px] font-bold text-ink'
                    }
                  >
                    {day.short}
                  </span>
                  <span className="text-[13px] text-ink-3">
                    {minutes === 0 ? 'none' : `${minutes} min`}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="text-[13px] text-ink-3">
            Bars show planned homework each evening. Dashed line: {child.yearGroup} guide
            of {child.nightlyGuide} min.
          </p>
        </Card>
      </Link>

      </div>
    </div>
  );
}
