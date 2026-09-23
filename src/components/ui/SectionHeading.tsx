import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const isCentre = align === 'center';

  return (
    <div
      className={cn(
        'flex flex-col gap-[14px]',
        isCentre ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && <p className="text-[16px] font-bold text-accent">{eyebrow}</p>}

      <h2 className="font-display text-[26px] md:text-[46px]">{title}</h2>

      {intro && <p className="max-w-[70ch] text-[19px] text-ink-2">{intro}</p>}
    </div>
  );
}