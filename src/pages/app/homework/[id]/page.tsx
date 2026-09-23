import { useNavigate, useParams } from 'react-router-dom';
import { HomeworkPanel } from '@/components/parent/HomeworkPanel';
import { useSelectedChild } from '@/components/parent/ChildProvider';
import { getTask } from '@/lib/demo-data';

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

export default function HomeworkDetail() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const { child } = useSelectedChild();

  const task = getTask(child.id, id);

  const goBack = () => {
    const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
    if (idx > 0) {
      navigate(-1);
    } else {
      navigate('/app/today');
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-[640px] flex-col gap-[18px] pb-7">
      <title>{task ? `${task.title} · Dueby` : 'Homework · Dueby'}</title>

      <button
        type="button"
        onClick={goBack}
        className="flex h-11 w-fit cursor-pointer items-center gap-1 text-[16px] font-bold text-accent"
      >
        <ChevronLeftIcon />
        Back
      </button>

      <HomeworkPanel
        taskId={id}
        onOpenHelp={() => navigate(`/app/homework/${id}/help`)}
      />
    </div>
  );
}