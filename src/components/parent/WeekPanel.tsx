import { LoadBar } from '@/components/ui/LoadBar';
import { TaskRow } from '@/components/parent/TaskRow';
import { WeekLegend } from '@/components/parent/WeekLegend';
import { useSelectedChild } from '@/components/parent/ChildProvider';
import { WEEK_DAYS, minutesForNight, tasksForNight } from '@/lib/demo-data';

export interface WeekPanelProps {
  /** Present only on the tablet two-pane layout, where rows select instead of navigate. */
  onSelect?: (taskId: string) => void;
  selectedId?: string;
}

/** Everything inside the week screen's column — shared by the phone and tablet layouts. */
export function WeekPanel({ onSelect, selectedId }: WeekPanelProps) {
  const { child } = useSelectedChild();
  const guide = child.nightlyGuide;

  return (
    <div className="flex flex-col gap-[22px]">
      <div className="flex flex-col gap-3">
        <h1 className="text-[26px] leading-tight text-ink">Week of 21 September</h1>
        <p className="text-[15px] text-ink-3">
          What {child.name} is planned to do each evening. {child.yearGroup} guide: about{' '}
          {guide} minutes a night.
        </p>

        <WeekLegend yearGroup={child.yearGroup} />
      </div>

      <div className="flex flex-col gap-6">
        {WEEK_DAYS.map((day) => {
          const minutes = minutesForNight(child, day.key);
          const tasks = tasksForNight(child, day.key);
          const isOver = minutes > guide;

          return (
            <section key={day.key} className="flex flex-col gap-[10px]">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[17px] font-bold text-ink">
                  {day.long}
                  {day.isToday ? ' · Tonight' : ''}
                </p>

                <p className="whitespace-nowrap text-[14px] text-ink-3">
                  {minutes === 0 ? 'Nothing planned' : `${minutes} of ${guide} min`}
                  {isOver ? <span className="text-warn-ink"> · heavy</span> : null}
                </p>
              </div>

              <LoadBar minutes={minutes} guide={guide} />

              {tasks.length > 0 ? (
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {tasks.map((task) => (
                    <li key={task.id}>
                      <TaskRow
                        task={task}
                        onSelect={onSelect}
                        selected={task.id === selectedId}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="rounded-lg border border-dashed border-line-strong p-[14px] text-[14px] text-ink-3">
                  Nothing planned. Enjoy the evening.
                </p>
              )}
            </section>
          );
        })}
      </div>

      <p className="text-[15px] text-ink-3">
        Times are estimates set by the teacher. If an evening looks wrong, tell your
        child&apos;s form tutor.
      </p>
    </div>
  );
}

export default WeekPanel;