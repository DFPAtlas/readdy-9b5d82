import { Link } from 'react-router-dom';
import { StatusPill } from '@/components/ui/StatusPill';
import { SubjectTag } from '@/components/ui/SubjectTag';
import { cn } from '@/lib/utils';
import type { Task } from '@/lib/types';

type LiveStatus = 'todo' | 'started' | 'handed-in' | 'overdue';

export interface TaskRowProps {
  task: Task;
  /** When provided the row acts as a selector instead of a link. */
  onSelect?: (taskId: string) => void;
  selected?: boolean;
  className?: string;
}

/** One homework row. Shared by the Today, Week and homework screens. */
export function TaskRow({ task, onSelect, selected = false, className }: TaskRowProps) {
  const meta = task.mark
    ? `Marked ${task.markedOn} · ${task.setBy}`
    : `${task.dueRelative} · about ${task.minutes} min`;

  const classes = cn(
    'flex min-h-[72px] w-full items-center justify-between gap-3 rounded-lg bg-surface px-3.5 py-3 text-left transition-colors',
    selected
      ? 'border-2 border-accent'
      : 'border border-line hover:border-line-strong focus-visible:border-line-strong',
    className,
  );

  const inner = (
    <>
      <span className="flex min-w-0 flex-col gap-[5px]">
        <SubjectTag subject={task.subject} className="w-fit" />
        <span className="text-[16px] font-bold text-ink">{task.title}</span>
        <span className="text-[14px] text-ink-3">{meta}</span>
      </span>

      {task.mark ? (
        <StatusPill mark={task.mark} className="shrink-0" />
      ) : (
        <StatusPill status={task.status as LiveStatus} className="shrink-0" />
      )}
    </>
  );

  if (onSelect) {
    return (
      <button
        type="button"
        aria-current={selected ? 'true' : undefined}
        onClick={() => onSelect(task.id)}
        className={cn(classes, 'cursor-pointer')}
      >
        {inner}
      </button>
    );
  }

  return (
    <Link to={`/app/homework/${task.id}`} className={classes}>
      {inner}
    </Link>
  );
}

export default TaskRow;