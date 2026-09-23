import { useEffect, useState } from 'react';
import { HomeworkPanel } from '@/components/parent/HomeworkPanel';
import { WeekPanel } from '@/components/parent/WeekPanel';
import { useSelectedChild } from '@/components/parent/ChildProvider';
import { tasksForNight } from '@/lib/demo-data';

export default function Week() {
  const { child } = useSelectedChild();

  const [isWide, setIsWide] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [helpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)');
    const update = () => setIsWide(mq.matches);

    update();
    mq.addEventListener('change', update);

    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const first = tasksForNight(child, 'mon')[0] ?? child.tasks[0];
    setSelectedId(first ? first.id : null);
    setHelpOpen(false);
  }, [child.id]);

  const handleSelect = (taskId: string) => {
    setSelectedId(taskId);
    setHelpOpen(false);
  };

  if (!isWide) {
    return (
      <div className="mx-auto flex w-full max-w-[640px] flex-col pb-6">
        <title>This week · Dueby</title>
        <WeekPanel />
      </div>
    );
  }

  return (
    <div className="flex w-full items-start gap-6">
      <title>This week · Dueby</title>

      <div className="min-w-0 flex-1">
        <WeekPanel onSelect={handleSelect} selectedId={selectedId ?? undefined} />
      </div>

      <aside className="sticky top-[60px] max-h-[calc(100vh-60px)] w-[420px] shrink-0 overflow-y-auto border-l border-line bg-surface">
        <div className="p-6">
          {selectedId ? (
            <HomeworkPanel
              taskId={selectedId}
              titleAs="h2"
              showHelp={helpOpen}
              onOpenHelp={() => setHelpOpen(true)}
              onCloseHelp={() => setHelpOpen(false)}
            />
          ) : (
            <p className="py-10 text-center text-[16px] text-ink-3">
              Choose a piece of homework to see the details.
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}