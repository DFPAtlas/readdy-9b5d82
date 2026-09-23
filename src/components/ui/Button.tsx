import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'outline' | 'quiet';
type Size = 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
}

export type ButtonAsButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children' | 'type'> & {
    href?: undefined;
  };

export type ButtonAsLinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: 'bg-accent text-accent-ink hover:bg-accent-hover',
  outline: 'bg-transparent border-2 border-ink text-ink hover:bg-ink/5',
  quiet: 'bg-transparent text-accent hover:text-accent-hover hover:bg-accent-soft',
};

const SIZE_CLASSES: Record<Size, string> = {
  md: 'h-[46px] px-5 text-[16px]',
  lg: 'h-[56px] px-[26px] text-[18px]',
};

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props;

  const classes = cn(
    'inline-flex items-center justify-center gap-[10px] rounded-lg font-bold whitespace-nowrap cursor-pointer transition-colors',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    'disabled:opacity-50 disabled:cursor-not-allowed',
    className,
  );

  if (typeof rest.href === 'string') {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}