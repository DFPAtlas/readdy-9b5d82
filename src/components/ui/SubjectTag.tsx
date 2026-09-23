import { cn } from '@/lib/utils';

export interface SubjectTagProps {
  subject: string;
  className?: string;
}

const SUBJECT_CLASSES: Record<string, string> = {
  maths: 'bg-subj-maths text-subj-maths-ink',
  english: 'bg-subj-english text-subj-english-ink',
  science: 'bg-subj-science text-subj-science-ink',
  french: 'bg-subj-french text-subj-french-ink',
  history: 'bg-subj-history text-subj-history-ink',
  geography: 'bg-subj-geography text-subj-geography-ink',
};

const OTHER_CLASSES = 'bg-subj-other text-subj-other-ink';

export function SubjectTag({ subject, className }: SubjectTagProps) {
  const tone = SUBJECT_CLASSES[subject.toLowerCase()] ?? OTHER_CLASSES;

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full py-[2px] px-[9px] text-[12px] font-bold',
        tone,
        className,
      )}
    >
      {subject}
    </span>
  );
}