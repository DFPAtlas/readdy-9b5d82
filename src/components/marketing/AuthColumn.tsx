import type { ReactNode } from 'react';

export interface AuthColumnProps {
  children: ReactNode;
}

/**
 * Shared shell for the login screens.
 * Full-height paper background, content in a centred 420px column,
 * 24px side padding and 20px top padding.
 */
export function AuthColumn({ children }: AuthColumnProps) {
  return (
    <div className="min-h-screen w-full bg-paper px-6 pt-5 pb-12">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <main
        id="main"
        className="mx-auto flex w-full max-w-[420px] flex-col gap-6"
      >
        {children}
      </main>
    </div>
  );
}

export default AuthColumn;