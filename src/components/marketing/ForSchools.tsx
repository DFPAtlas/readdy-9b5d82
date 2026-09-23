import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/marketing/Container';

const basePath = __BASE_PATH__.split('/').filter(Boolean).join('/');
const pathPrefix = basePath ? `/${basePath}` : '';

const PANELS = [
  {
    title: 'Only the data it needs',
    body: 'Names, classes and timetables from your MIS. Nothing about SEN, health or home addresses.',
  },
  {
    title: 'Teachers stay in charge',
    body: 'AI drafts. A teacher approves every mark before a pupil or parent sees it.',
  },
  {
    title: 'UK-hosted, never used for training',
    body: "Pupils' work stays in the UK and is never used to train AI models.",
  },
];

export function ForSchools() {
  const navigate = useNavigate();

  return (
    <section id="schools" className="on-dark bg-ink py-16 text-white md:py-24">
      <Container>
        <div id="privacy" className="flex flex-col items-start gap-[14px]">
          <p className="text-[16px] font-bold" style={{ color: '#9ED3CC' }}>
            For schools
          </p>

          <h2 className="font-display text-[26px] font-semibold text-white md:text-[46px]">
            Built for the people who have to sign it off.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 min-[900px]:grid-cols-3">
          {PANELS.map((panel) => (
            <div
              key={panel.title}
              className="rounded-[18px] border p-[26px]"
              style={{ borderColor: '#3A4A63' }}
            >
              <h3 className="font-display text-[24px] font-semibold text-white">
                {panel.title}
              </h3>
              <p className="mt-3 text-[16px]" style={{ color: '#D5DCE6' }}>
                {panel.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button
            size="lg"
            href={`${pathPrefix}/demo`}
            className="!bg-surface !text-ink hover:!bg-surface-alt"
            onClick={(event) => {
              event.preventDefault();
              navigate('/demo');
            }}
          >
            Explore the parent preview
          </Button>

          <p className="text-[16px]" style={{ color: '#D5DCE6' }}>
            See the sample parent experience before planning a school pilot.
          </p>
        </div>
      </Container>
    </section>
  );
}
