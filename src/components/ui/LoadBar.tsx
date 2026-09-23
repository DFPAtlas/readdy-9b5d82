import { cn } from '@/lib/utils';

export interface LoadBarProps {
  minutes: number;
  guide: number;
  orientation?: 'horizontal' | 'vertical';
  showGuide?: boolean;
  label?: string;
  className?: string;
}

/** Over-guide colour. No token exists for this yet, so it is scoped to this file only. */
const OVER_COLOR = '#B45309';

/** The guide sits at 80% of the track. */
const GUIDE_POSITION = 80;

export function LoadBar({
  minutes,
  guide,
  orientation = 'horizontal',
  showGuide = true,
  label,
  className,
}: LoadBarProps) {
  const safeMinutes = Math.max(0, minutes);
  const safeGuide = guide > 0 ? guide : 0;
  const isOver = safeGuide > 0 && safeMinutes > safeGuide;

  const fillPercent =
    safeGuide > 0
      ? Math.min(100, (safeMinutes / (safeGuide * 1.25)) * 100)
      : 0;

  const ariaLabel =
    label ?? `${safeMinutes} minutes of homework, guide is ${safeGuide} minutes`;

  const fillStyle = {
    background: isOver ? OVER_COLOR : undefined,
  };

  const trackClasses = 'relative bg-surface-alt rounded-full';

  const guideMarkerClasses =
    'absolute border-dashed border-line-strong pointer-events-none';

  if (orientation === 'vertical') {
    return (
      <div
        role="img"
        aria-label={ariaLabel}
        className={cn(trackClasses, 'h-[72px] w-[10px]', className)}
      >
        <div
          className="absolute bottom-0 left-0 w-full rounded-full bg-accent"
          style={{ ...fillStyle, height: `${fillPercent}%` }}
        />
        {showGuide && (
          <div
            className={cn(guideMarkerClasses, 'left-0 right-0 border-t-2')}
            style={{ bottom: `${GUIDE_POSITION}%` }}
          />
        )}
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={cn(trackClasses, 'h-[10px] w-full', className)}
    >
      <div
        className="absolute left-0 top-0 h-full rounded-full bg-accent"
        style={{ ...fillStyle, width: `${fillPercent}%` }}
      />
      {showGuide && (
        <div
          className={cn(guideMarkerClasses, 'top-0 bottom-0 border-l-2')}
          style={{ left: `${GUIDE_POSITION}%` }}
        />
      )}
    </div>
  );
}