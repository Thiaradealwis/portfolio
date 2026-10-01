
export default function EducationEntry({ title, subtitle, meta, highlight }) {
    return (
        <article className="edu-entry">
            {(meta || highlight) && (
                <div className="edu-labels">
                    {meta && <span className="edu-date">{meta}</span>}
                    {highlight && <span className="edu-grade">{highlight}</span>}
                </div>
            )}
            <h3 className="edu-degree">{title}</h3>
            {subtitle && <p className="edu-uni">{subtitle}</p>}
        </article>
    );
}