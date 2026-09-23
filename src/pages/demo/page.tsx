import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChildProvider, useSelectedChild } from '@/components/parent/ChildProvider';
import { ChildSwitcher } from '@/components/parent/ChildSwitcher';
import { HomeworkPanel } from '@/components/parent/HomeworkPanel';
import { TaskRow } from '@/components/parent/TaskRow';
import { WeekPanel } from '@/components/parent/WeekPanel';
import { Card } from '@/components/ui/Card';
import { minutesForNight, overdueTask, tasksForNight } from '@/lib/demo-data';

type View = 'today' | 'week';

function DemoExperience() {
  const { child } = useSelectedChild();
  const [view, setView] = useState<View>('today');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [helpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    setSelectedId(null);
    setHelpOpen(false);
  }, [child.id]);

  const tasks = tasksForNight(child, 'mon');
  const overdue = overdueTask(child);

  const selectTask = (id: string) => {
    setSelectedId(id);
    setHelpOpen(false);
  };

  return (
    <div className="overflow-hidden rounded-[24px] border border-line bg-paper shadow-xl shadow-ink/10">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-surface px-5 py-4 md:px-8">
        <span className="font-display text-[27px] font-semibold text-ink">Dueby</span>
        <span className="rounded-full bg-accent-soft px-3 py-1 text-[13px] font-bold text-accent">Sample parent view</span>
      </div>

      <div className="grid min-h-[620px] lg:grid-cols-[230px_minmax(0,1fr)]">
        <nav aria-label="Preview screens" className="flex gap-2 border-b border-line bg-surface p-3 lg:flex-col lg:border-b-0 lg:border-r lg:p-4">
          {(['today', 'week'] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => { setView(item); setSelectedId(null); setHelpOpen(false); }}
              aria-current={view === item ? 'page' : undefined}
              className={`min-h-12 flex-1 rounded-lg px-4 text-left text-[16px] font-bold transition-colors lg:flex-none ${view === item ? 'bg-accent-soft text-accent' : 'text-ink-2 hover:bg-paper'}`}
            >
              {item === 'today' ? 'Today' : 'This week'}
            </button>
          ))}
        </nav>

        <div className="min-w-0 p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-2 border-b border-line pb-6">
            <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-ink-3">Viewing homework for</span>
            <ChildSwitcher className="max-w-[440px]" />
          </div>

          <div className={selectedId ? 'grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]' : ''}>
            <div className="min-w-0">
              {view === 'today' ? (
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="mb-1 text-[14px] font-bold text-accent">A calmer evening starts here</p>
                    <h2 className="text-[30px] text-ink">Tonight for {child.name}</h2>
                    <p className="mt-2 text-[16px] text-ink-2">About {minutesForNight(child, 'mon')} minutes of planned homework.</p>
                  </div>
                  <Card tone={overdue ? 'warn' : 'good'}>
                    <p className="text-[19px] font-bold text-ink">{overdue ? '1 thing needs a look' : 'All on track'}</p>
                    <p className="text-[15px] text-ink-2">{overdue ? `${overdue.subject}: “${overdue.title}” is in tonight’s plan.` : 'Nothing overdue in this sample week.'}</p>
                  </Card>
                  <section>
                    <h3 className="mb-3 text-[22px] text-ink">Homework tonight</h3>
                    <ul className="flex flex-col gap-3">
                      {tasks.map((task) => <li key={task.id}><TaskRow task={task} onSelect={selectTask} selected={selectedId === task.id} /></li>)}
                    </ul>
                  </section>
                  <button type="button" onClick={() => { setView('week'); setSelectedId(null); }} className="min-h-11 w-fit font-bold text-accent underline underline-offset-4">Explore the full week →</button>
                </div>
              ) : <WeekPanel onSelect={selectTask} selectedId={selectedId ?? undefined} />}
            </div>

            {selectedId && (
              <aside aria-label="Homework details" className="min-w-0 rounded-xl border border-line bg-surface p-5 sm:p-6">
                <button type="button" onClick={() => { setSelectedId(null); setHelpOpen(false); }} className="mb-5 min-h-11 font-bold text-accent">← Close details</button>
                <HomeworkPanel taskId={selectedId} titleAs="h2" showHelp={helpOpen} onOpenHelp={() => setHelpOpen(true)} onCloseHelp={() => setHelpOpen(false)} />
              </aside>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Demo() {
  return (
    <>
      <title>Explore the parent preview · Dueby</title>
      <meta name="description" content="Explore a sample of the Dueby parent homework experience." />
      <div className="mx-auto max-w-[1360px] pb-12">
        <div className="mb-8 max-w-[760px]">
          <p className="mb-3 text-[15px] font-bold text-accent">Interactive preview</p>
          <h1 className="text-[34px] text-ink md:text-[56px]">See an evening through a parent’s eyes.</h1>
          <p className="mt-4 text-[18px] text-ink-2">Switch between children, explore the week and open a homework task. Everything below is sample data for the preview.</p>
        </div>
        <ChildProvider><DemoExperience /></ChildProvider>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line bg-surface p-6">
          <div><h2 className="text-[23px] text-ink">Ready to see more?</h2><p className="mt-1 text-[15px] text-ink-2">Explore how Dueby could work for your school.</p></div>
          <Link to="/#schools" className="inline-flex min-h-12 items-center rounded-lg bg-accent px-6 font-bold text-white hover:bg-accent-hover hover:text-white">For schools →</Link>
        </div>
      </div>
    </>
  );
}
