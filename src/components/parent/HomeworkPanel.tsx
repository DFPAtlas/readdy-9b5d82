import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { StatusPill } from '@/components/ui/StatusPill';
import { SubjectTag } from '@/components/ui/SubjectTag';
import { HelpPanel } from '@/components/parent/HelpPanel';
import { useSelectedChild } from '@/components/parent/ChildProvider';
import { getHelpCard, getTask } from '@/lib/demo-data';

type LiveStatus = 'todo' | 'started' | 'handed-in' | 'overdue';

function ChevronLeftIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 5.5 8.5 12l6.5 6.5" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18.25h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 1 3.75 10.7c-.5.4-.75.9-.75 1.5v.3h-6v-.3c0-.6-.25-1.1-.75-1.5A6 6 0 0 1 12 3Z" />
    </svg>
  );
}

export interface HomeworkPanelProps {
  taskId: string;
  /** When true the panel shows the help guide in place of the detail view. */
  showHelp?: boolean;
  onOpenHelp?: () => void;
  onCloseHelp?: () => void;
  /** Heading level for the homework title: h1 on its own route, h2 in the tablet pane. */
  titleAs?: 'h1' | 'h2';
}

/** The homework detail body — shared by the phone route and the tablet pane. */
export function HomeworkPanel({
  taskId,
  showHelp = false,
  onOpenHelp,
  onCloseHelp,
  titleAs = 'h1',
}: HomeworkPanelProps) {
  const navigate = useNavigate();
  const { child } = useSelectedChild();

  const task = getTask(child.id, taskId);
  const helpCard = task ? getHelpCard(task.id) : undefined;

  const TitleTag = titleAs === 'h2' ? 'h2' : 'h1';

  if (!task) {
    return (
      <div className="flex flex-col gap-[18px]">
        <TitleTag className="text-[27px] leading-[1.15] text-ink">
          We can&apos;t find that homework
        </TitleTag>
        <p className="text-[16px] text-ink-2">
          It may have been removed, or the link may be out of date. Head back to
          tonight&apos;s plan to pick it up again.
        </p>

        <Button className="w-fit" onClick={() => navigate('/app/today')}>
          Back to today
        </Button>
      </div>
    );
  }

  if (showHelp && helpCard) {
    return (
      <div className="flex flex-col gap-[14px]">
        <button
          type="button"
          onClick={onCloseHelp}
          className="flex h-11 w-fit cursor-pointer items-center gap-1 text-[16px] font-bold text-accent"
        >
          <ChevronLeftIcon />
          Back to homework
        </button>

        <HelpPanel taskId={task.id} titleAs={titleAs} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[18px]">
      <div className="flex flex-col gap-3">
        <SubjectTag subject={task.subject} className="w-fit" />
        <TitleTag className="text-[27px] leading-[1.15] text-ink">{task.title}</TitleTag>
      </div>

      <div className="grid grid-cols-2 gap-[10px]">
        <div className="flex flex-col gap-1 rounded-lg border border-line bg-surface px-3.5 py-3">
          <span className="text-[13px] text-ink-3">Due</span>
          <span className="text-[16px] font-bold text-ink">{task.due}</span>
        </div>

        <div className="flex flex-col gap-1 rounded-lg border border-line bg-surface px-3.5 py-3">
          <span className="text-[13px] text-ink-3">Should take</span>
          <span className="text-[16px] font-bold text-ink">
            About {task.minutes} min
          </span>
        </div>

        <div className="flex flex-col gap-1 rounded-lg border border-line bg-surface px-3.5 py-3">
          <span className="text-[13px] text-ink-3">Set by</span>
          <span className="text-[16px] font-bold text-ink">{task.setBy}</span>
        </div>

        <div className="flex flex-col gap-1 rounded-lg border border-line bg-surface px-3.5 py-3">
          <span className="text-[13px] text-ink-3">Status</span>
          <span className="flex">
            {task.mark ? (
              <StatusPill mark={task.mark} />
            ) : (
              <StatusPill status={task.status as LiveStatus} />
            )}
          </span>
        </div>
      </div>

      <Card>
        <h2 className="text-[17px] text-ink">What to do</h2>
        <p className="whitespace-pre-line text-[16px] leading-[1.55] text-ink-2">
          {task.instructions}
        </p>
        <p className="text-[13px] text-ink-3">
          This is exactly what {child.name} sees.
        </p>
      </Card>

      {task.mark ? (
        <Card>
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="text-[17px] text-ink">How it went</h2>
            <StatusPill mark={task.mark} className="shrink-0" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[14px] font-bold text-good-ink">What went well</p>
            <p className="text-[16px] text-ink-2">{task.wentWell}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[14px] font-bold text-info-ink">Next step</p>
            <p className="text-[16px] text-ink-2">{task.nextStep}</p>
          </div>

          <Card tone="quiet" padding="sm">
            <p className="text-[14px] font-bold text-ink">
              If {child.name} asks for help
            </p>
            <p className="text-[15px] text-ink-2">{task.homeTip}</p>
          </Card>

          <p className="text-[13px] text-ink-3">Checked by {task.setBy}</p>
        </Card>
      ) : null}

      {helpCard && onOpenHelp ? (
        <div className="flex flex-col gap-3 pt-1">
          <Button size="lg" className="w-full" onClick={onOpenHelp}>
            <BulbIcon />
            My child asked me for help
          </Button>

          <p className="text-center text-[14px] text-ink-3">
            How this is taught now, and questions to ask instead of giving the
            answer.
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default HomeworkPanel;