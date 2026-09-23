import { Link, Navigate, useParams } from 'react-router-dom';
import { HelpPanel } from '@/components/parent/HelpPanel';
import { getHelpCard } from '@/lib/demo-data';

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

export default function HomeworkHelp() {
  const { id = '' } = useParams();

  const card = getHelpCard(id);

  if (!card) {
    return <Navigate to={`/app/homework/${id}`} replace />;
  }

  return (
    <div className="mx-auto flex w-full max-w-[640px] flex-col gap-[14px] pb-8">
      <title>{`How to help: ${card.title} · Dueby`}</title>

      <Link
        to={`/app/homework/${id}`}
        className="flex h-11 w-fit items-center gap-1 text-[16px] font-bold text-accent"
      >
        <ChevronLeftIcon />
        Back to homework
      </Link>

      <HelpPanel taskId={id} />
    </div>
  );
}