import { CHILDREN, overdueTask } from "@/lib/demo-data";
import { cn } from "@/lib/utils";
import { useSelectedChild } from "@/components/parent/ChildProvider";

/** Status dot colours. No tokens exist for these, so they are scoped here. */
const OVERDUE_DOT = "#F59E0B";
const CLEAR_DOT = "#34D399";

export interface ChildSwitcherProps {
  className?: string;
}

export function ChildSwitcher({ className }: ChildSwitcherProps) {
  const { childId, setChildId } = useSelectedChild();

  return (
    <div
      role="group"
      aria-label="Choose a child"
      className={cn("flex w-full gap-2", className)}
    >
      {CHILDREN.map((child) => {
        const selected = child.id === childId;
        const overdue = overdueTask(child);
        const status = overdue ? "1 thing needs a look" : "nothing overdue";

        return (
          <button
            key={child.id}
            type="button"
            aria-pressed={selected}
            aria-label={`${child.name}, ${child.yearGroup}, ${status}`}
            onClick={() => setChildId(child.id)}
            className={cn(
              "flex min-h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full px-4 text-[15px] font-bold transition-colors",
              selected
                ? "bg-ink text-accent-ink"
                : "bg-surface border-2 border-line-strong text-ink",
            )}
          >
            <span
              aria-hidden="true"
              className="h-[10px] w-[10px] shrink-0 rounded-full"
              style={{ backgroundColor: overdue ? OVERDUE_DOT : CLEAR_DOT }}
            />
            {child.name} · {child.yearShort}
          </button>
        );
      })}
    </div>
  );
}

export default ChildSwitcher;