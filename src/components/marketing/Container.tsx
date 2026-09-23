import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}

/**
 * Shared marketing-page content column.
 * Side padding: 20px mobile, 80px desktop. Max width 1280px, centred.
 */
export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[1280px] px-5 md:px-20', className)}>
      {children}
    </div>
  );
}