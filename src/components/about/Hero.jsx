import Button from '../ui/Button';
import HeroArt from './HeroArt';

export default function Hero({ hero, codeCard }) {
  const { eyebrow, greeting, highlight, tagline, actions } = hero;
  return (
    <section className="hero">
      <div className="hero__text">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display">
          {greeting} <mark className="highlight">{highlight}</mark>
        </h1>
        <p className="lead">{tagline}</p>
        <div className="hero__actions">
          {actions.map(({ label, ...props }) => (
            <Button key={label} {...props}>{label}</Button>
          ))}
        </div>
      </div>
      <HeroArt codeCard={codeCard} />
    </section>
  );
}
