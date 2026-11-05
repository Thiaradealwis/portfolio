export default function PublicationItem({ year, title, venue, authors, href }) {
    return (
        <article className="publication">
            <span className="publication__year">{year}</span>
            <div className="publication__body">
                <h3 className="publication__title">
                    {href ? <a href={href} target="_blank" rel="noopener noreferrer">{title}</a> : title}
                </h3>
                <p className="publication__venue">{venue}</p>
                <p className="publication__authors">{authors.join(', ')}</p>
            </div>
        </article>
    );
}