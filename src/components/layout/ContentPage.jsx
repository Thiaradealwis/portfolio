/** Shared shell for list pages (Projects, Publications). Shows a placeholder until items exist. */
export default function ContentPage({ title, intro, items }) {
  return (
    <section className="content-page">
      <h1 className="display">{title}</h1>
      <p className="lead">{intro}</p>
      {items.length === 0 ? (
        <p className="empty-state">Coming soon.</p>
      ) : (
        <ul className="content-list">
          {items.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
