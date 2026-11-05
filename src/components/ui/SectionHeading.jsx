/** Mono uppercase label with a rule beside it. */
export default function SectionHeading({ children }) {
  return (
    <h2 className="section-heading">
      <span>{children}</span>
    </h2>
  );
}
