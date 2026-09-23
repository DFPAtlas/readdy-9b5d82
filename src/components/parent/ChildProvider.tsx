import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { CHILDREN } from '@/lib/demo-data';
import type { Child } from '@/lib/types';

export interface ChildContextValue {
  childId: string;
  setChildId: (id: string) => void;
  child: Child;
}

const ChildContext = createContext<ChildContextValue | undefined>(undefined);

export interface ChildProviderProps {
  children: ReactNode;
}

/**
 * Holds which child the parent is looking at.
 * Seeded with the first child; persisting the choice is a later job.
 */
export function ChildProvider({ children }: ChildProviderProps) {
  const [childId, setChildId] = useState<string>(CHILDREN[0].id);

  const value = useMemo<ChildContextValue>(() => {
    const child = CHILDREN.find((item) => item.id === childId) ?? CHILDREN[0];

    return { childId, setChildId, child };
  }, [childId]);

  return <ChildContext.Provider value={value}>{children}</ChildContext.Provider>;
}

export function useSelectedChild(): ChildContextValue {
  const context = useContext(ChildContext);

  if (!context) {
    throw new Error('useSelectedChild must be used inside a ChildProvider');
  }

  return context;
}

export default ChildProvider;