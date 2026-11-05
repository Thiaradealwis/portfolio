export default function Education({ entries }) {
    return (
        <section className="education">
            <h2 className="eyebrow">Education</h2>
            <ul className="education__list">
                {entries.map(({ id, dates, title, institution, note }) => (
                    <li key={id} className="education__item">
                        <div className="education__meta">
                            <span>{dates}</span>
                            <span className="education__note">{note}</span>
                        </div>
                        <h3 className="education__title">{title}</h3>
                        <p className="education__institution">{institution}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
