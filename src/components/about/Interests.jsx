import Pill from '../ui/Pill';

export default function Interests({ items }) {
  return (
    <section className="interests" aria-label="Interests">
      <span className="eyebrow">Interests</span>
      <ul className="pill-list">
        {items.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
      </ul>
    </section>
  );
}
