import { cn } from '@/lib/utils';

type Status = 'todo' | 'started' | 'handed-in' | 'overdue';
type Mark = 'Not yet' | 'Getting there' | 'Secure' | 'Excellent';

interface BaseProps {
  className?: string;
}

export type StatusPillProps = BaseProps &
  (
    | { status: Status; mark?: never }
    | { mark: Mark; status?: never }
  );

const STATUS_LABELS: Record<Status, string> = {
  todo: 'To do',
  started: 'Started',
  'handed-in': 'Handed in',
  overdue: 'Overdue',
};

const PILL_CLASSES: Record<string, string> = {
  todo: 'bg-surface text-ink border-line-strong',
  started: 'bg-info-bg text-info-ink border-info-ink/25',
  'handed-in': 'bg-good-bg text-good-ink border-good-ink/25',
  overdue: 'bg-bad-bg text-bad-ink border-bad-ink/30',
  'Not yet': 'bg-poor-bg text-poor-ink border-poor-ink/25',
  'Getting there': 'bg-warn-bg text-warn-ink border-warn-line',
  Secure: 'bg-good-bg text-good-ink border-good-ink/25',
  Excellent: 'bg-good-bg text-good-ink border-good-ink/25',
};

export function StatusPill({ status, mark, className }: StatusPillProps) {
  const key: Status | Mark = status ?? (mark as Mark);
  const label = status ? STATUS_LABELS[status] : mark;

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border py-[5px] px-[10px] text-[13px] font-bold',
        PILL_CLASSES[key],
        className,
      )}
    >
      {label}
    </span>
  );
}