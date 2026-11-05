export default function Intro({ label, paragraphs }) {
  const [first, ...rest] = paragraphs;
  return (
    <section className="intro">
      <span className="eyebrow">{label}</span>
      <div className="intro__body">
        <p className="intro__first">{first}</p>
        {rest.map((text) => (
          <p key={text} className="intro__rest">{text}</p>
        ))}
      </div>
    </section>
  );
}
