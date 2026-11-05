import CodeCard from './CodeCard';

/** Concentric "sunrise" arcs with the code card floating on top. */
export default function HeroArt({ codeCard }) {
  return (
    <div className="hero-art" aria-hidden="true">
      <span className="arc arc--1" />
      <span className="arc arc--2" />
      <span className="arc arc--3" />
      <span className="arc arc--4" />
      <CodeCard {...codeCard} />
    </div>
  );
}
