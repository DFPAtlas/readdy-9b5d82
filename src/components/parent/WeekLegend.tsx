import { cn } from '@/lib/utils';

export interface WeekLegendProps {
  yearGroup: string;
  className?: string;
}

/**
 * The key to reading the week screen: what a filled bar means and where the
 * year group's nightly guide sits. Shown once, near the top.
 */
export function WeekLegend({ yearGroup, className }: WeekLegendProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-4', className)}>
      <span className="flex items-center gap-[10px]">
        <span
          className="h-[10px] w-[20px] rounded-full bg-accent"
          aria-hidden="true"
        />
        <span className="text-[13px] text-ink-3">Planned homework</span>
      </span>

      <span className="flex items-center gap-[10px]">
        <span
          className="w-[20px] border-t-2 border-dashed border-line-strong"
          aria-hidden="true"
        />
        <span className="text-[13px] text-ink-3">{yearGroup} guide</span>
      </span>
    </div>
  );
}

export default WeekLegend;