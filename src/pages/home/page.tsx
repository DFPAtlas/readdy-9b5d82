import { Hero } from '@/components/marketing/Hero';
import { Audiences } from '@/components/marketing/Audiences';
import { HelpAtHome } from '@/components/marketing/HelpAtHome';
import { ForSchools } from '@/components/marketing/ForSchools';

export default function Home() {
  return (
    <>
      <title>Dueby — homework, made clear</title>
      <meta
        name="description"
        content="Homework for UK secondary schools. One calm screen for parents, pupils and teachers."
      />

      <div className="-mx-5 -my-12 md:-mx-20">
        <Hero />
        <Audiences />
        <HelpAtHome />
        <ForSchools />
      </div>
    </>
  );
}