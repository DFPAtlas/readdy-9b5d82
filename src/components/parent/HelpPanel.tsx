import { Card } from '@/components/ui/Card';
import { BarModelDiagram } from '@/components/parent/BarModelDiagram';
import { useSelectedChild } from '@/components/parent/ChildProvider';
import { getHelpCard } from '@/lib/demo-data';

const LANGUAGES: Array<{ label: string; lang?: string; dir?: 'rtl' | 'ltr' }> = [
  { label: 'Polski' },
  { label: 'Română' },
  { label: 'اردو', lang: 'ur', dir: 'rtl' },
  { label: 'More' },
];

function GlobeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.75 5.6 3.75 9s-1.25 6.4-3.75 9c-2.5-2.6-3.75-5.6-3.75-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

export interface HelpPanelProps {
  taskId: string;
  className?: string;
  /** Heading level for the guide title: h1 on its own route, h2 in the tablet pane. */
  titleAs?: 'h1' | 'h2';
}

/** The "How to help" guide body — shared by the help route and the tablet pane. */
export function HelpPanel({ taskId, className, titleAs = 'h1' }: HelpPanelProps) {
  const { child } = useSelectedChild();
  const card = getHelpCard(taskId);

  const TitleTag = titleAs === 'h2' ? 'h2' : 'h1';

  if (!card) {
    return null;
  }

  return (
    <div className={className ? `flex flex-col gap-[14px] ${className}` : 'flex flex-col gap-[14px]'}>
      <div className="flex flex-col gap-2">
        <p className="text-[14px] font-bold text-accent">
          How to help · {card.subject}
        </p>
        <TitleTag className="text-[27px] leading-[1.15] text-ink">{card.title}</TitleTag>
      </div>

      <Card>
        <h2 className="text-[16px] text-ink">What this is about</h2>
        <p className="text-[16px] leading-[1.55] text-ink-2">{card.about}</p>
      </Card>

      <Card>
        <h2 className="text-[16px] text-ink">Then and now</h2>

        <div className="grid grid-cols-1 gap-[10px] min-[360px]:grid-cols-2">
          <div className="flex flex-col gap-1 rounded-md bg-surface-alt p-3">
            <p className="text-[13px] font-bold text-[#5B4F3A]">
              You probably learned
            </p>
            <p className="text-[15px] leading-[1.5] text-ink-2">{card.thenText}</p>
          </div>

          <div className="flex flex-col gap-1 rounded-md bg-accent-soft p-3">
            <p className="text-[13px] font-bold text-accent">Now it&apos;s taught</p>
            <p className="text-[15px] leading-[1.5] text-ink-2">{card.nowText}</p>
          </div>
        </div>

        <p className="text-[15px] leading-[1.5] text-ink-2">
          <span className="font-bold text-ink">Why it changed: </span>
          {card.why}
        </p>
      </Card>

      <Card>
        <h2 className="text-[16px] text-ink">
          The method {child.name}&apos;s class uses
        </h2>

        {card.hasBarModel ? (
          <div className="py-1">
            <BarModelDiagram />
          </div>
        ) : null}

        <ol className="flex list-none flex-col gap-3 p-0">
          {card.steps.map((step, index) => (
            <li key={step} className="flex items-start gap-3">
              <span
                className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-ink text-[14px] font-bold text-surface"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <span className="text-[16px] leading-[1.5] text-ink-2">{step}</span>
            </li>
          ))}
        </ol>
      </Card>

      <Card>
        <h2 className="text-[16px] text-ink">Ask instead of telling</h2>

        <div className="flex flex-col gap-[10px]">
          {card.asks.map((ask) => (
            <p
              key={ask}
              className="rounded-md bg-accent-soft px-3.5 py-2.5 text-[16px] leading-[1.5] text-ink"
            >
              &ldquo;{ask}&rdquo;
            </p>
          ))}
        </div>
      </Card>

      <Card tone="warn">
        <h2 className="text-[16px] text-ink">Don&apos;t worry if&hellip;</h2>
        <p className="text-[16px] leading-[1.55] text-ink-2">{card.dontWorry}</p>
      </Card>

      <div className="flex flex-col gap-3" aria-label="Translate this guide">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center text-ink-3">
            <GlobeIcon />
          </span>
          <p className="text-[15px] font-bold text-ink">
            Read this in another language
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map((language) => (
            <button
              key={language.label}
              type="button"
              lang={language.lang}
              dir={language.dir}
              className="inline-flex h-11 cursor-pointer items-center justify-center rounded-full border border-line-strong bg-surface px-5 text-[15px] font-bold text-ink whitespace-nowrap"
            >
              {language.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-[13px] text-ink-3">
        Checked by the {card.subject} department to match how it&apos;s taught at
        your child&apos;s school.
      </p>
    </div>
  );
}

export default HelpPanel;