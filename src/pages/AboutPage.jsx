import usePageTitle from '../hooks/usePageTitle';
import { codeCard, education, experience, hero, interests, intro } from '../content/about';
import Hero from '../components/about/Hero';
import Interests from '../components/about/Interests';
import Intro from '../components/about/Intro';
import Education from '../components/about/Education';
import Experience from '../components/about/Experience';

export default function AboutPage() {
  usePageTitle('About me');
  return (
    <>
      <Hero hero={hero} codeCard={codeCard} />
      <Interests items={interests} />
      <Intro {...intro} />
      <Education entries={education} />
      <Experience entries={experience} />
    </>
  );
}
