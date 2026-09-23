import { Card } from '@/components/ui/Card';
import { Container } from '@/components/marketing/Container';

export function HelpAtHome() {
  return (
    <section className="bg-paper py-16 md:py-[104px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-[14px]">
            <p className="text-[16px] font-bold text-accent">Help at home</p>

            <h2 className="font-display text-[26px] font-semibold text-ink md:text-[46px]">
              It&apos;s not taught the way you learned it. Now you&apos;ll know how it is.
            </h2>

            <p className="text-[19px] text-ink-2">
              When your child asks for help, open a short guide made for that exact homework. It
              shows what it&apos;s about, how it&apos;s taught now, and the questions to ask
              instead of giving the answer. It&apos;s available in your family&apos;s language
              too.
            </p>
          </div>

          <Card className="!p-7">
            <p className="text-[14px] font-bold text-accent">How to help · Maths</p>

            <p className="font-display text-[28px] font-semibold text-ink">Adding fractions</p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-[14px] bg-surface-alt p-4">
                <p className="text-[13px] font-bold text-ink-3">You probably learned</p>
                <p className="mt-1 text-[15px] text-ink-2">
                  A rule to memorise: find the common denominator, then cross-multiply.
                </p>
              </div>

              <div className="rounded-[14px] bg-accent-soft p-4">
                <p className="text-[13px] font-bold text-ink-3">Now it&apos;s taught</p>
                <p className="mt-1 text-[15px] text-ink-2">
                  Drawing fractions as bars to see why the pieces must match before adding.
                </p>
              </div>
            </div>

            <p className="text-[15px] font-bold text-ink">Ask instead of telling</p>

            <div className="rounded-[14px] bg-accent-soft p-4 text-[16px] text-ink">
              &ldquo;Are the pieces the same size yet?&rdquo;
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}