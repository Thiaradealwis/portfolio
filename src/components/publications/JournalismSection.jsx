/** Journalism list: each title is a link that goes bold on hover. */
export default function JournalismSection({ heading, items }) {
    return (
        <section className="publication-section">
            <h2 className="publication-section__heading">{heading}</h2>
            {items.map(({ id, year, title, venue, href }) => (
                <article key={id} className="publication">
                    <span className="publication__year">{year}</span>
                    <div className="publication__body">
                        <h3 className="article-title">
                            <a className="article-link" href={href} target="_blank" rel="noopener noreferrer" data-text={title}>
                                {title}
                            </a>
                        </h3>
                        {venue && <p className="publication__venue">{venue}</p>}
                    </div>
                </article>
            ))}
        </section>
    );
}