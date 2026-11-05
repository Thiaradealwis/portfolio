/** Two-column row: `meta` lines (dates, place) on the left, content on the right. */
export default function TimelineRow({ meta, children }) {
  return (
    <article className="timeline-row">
      <div className="timeline-row__meta">
        {meta.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <div className="timeline-row__body">{children}</div>
    </article>
  );
}
