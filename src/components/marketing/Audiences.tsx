import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/marketing/Container';

const AUDIENCES = [
  {
    label: 'For parents',
    title: "Know what's due, without the noise.",
    body: 'One screen per child. A short summary every Sunday. A message only when something is overdue.',
    bullets: [
      "Tonight's homework at a glance",
      'Marks explained in plain English',
      'Help guides for when your child gets stuck',
    ],
  },
  {
    label: 'For pupils',
    title: 'Tonight, sorted.',
    body: 'A single list for the evening, with how long each piece should take.',
    bullets: [
      'Works on any phone, even offline',
      'Read-aloud and easy-read versions',
      'Hand in with a photo',
    ],
  },
  {
    label: 'For teachers',
    title: 'Set it quickly. Mark it faster.',
    body: 'Draft the homework, mark scheme and parent guide in one go. AI suggests marks; you check and approve them.',
    bullets: [
      'A warning when a class already has a heavy night',
      'Approve confident marks in one tap',
      'See the mistakes the whole class made',
    ],
  },
];

export function Audiences() {
  return (
    <section id="parents" className="bg-surface py-16 md:py-24">
      <Container>
        <SectionHeading
          title="One clear picture for everyone."
          intro="Parents, pupils and teachers see the same homework, shown in the way that makes sense for each of them."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 min-[900px]:grid-cols-3">
          {AUDIENCES.map((item) => (
            <Card key={item.label} tone="quiet">
              <p className="text-[15px] font-bold text-accent">{item.label}</p>

              <h3 className="text-ink">{item.title}</h3>

              <p className="text-[16px] text-ink-2">{item.body}</p>

              <ul className="flex flex-col gap-2 text-[16px] text-ink-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-accent"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}