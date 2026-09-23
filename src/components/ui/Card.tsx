import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Tone = 'default' | 'quiet' | 'warn' | 'good';
type Padding = 'sm' | 'md';

export interface CardProps {
  as?: 'div' | 'section' | 'article';
  tone?: Tone;
  padding?: Padding;
  className?: string;
  children?: ReactNode;
}

const TONE_CLASSES: Record<Tone, string> = {
  default: 'bg-surface border border-line',
  quiet: 'bg-surface-alt',
  warn: 'bg-warn-bg border border-warn-line',
  good: 'bg-good-bg',
};

const PADDING_CLASSES: Record<Padding, string> = {
  sm: 'p-[14px]',
  md: 'p-5',
};

export function Card({
  as: Tag = 'div',
  tone = 'default',
  padding = 'md',
  className,
  children,
}: CardProps) {
  return (
    <Tag
      className={cn(
        'flex flex-col gap-3 rounded-xl',
        TONE_CLASSES[tone],
        PADDING_CLASSES[padding],
        className,
      )}
    >
      {children}
    </Tag>
  );
}