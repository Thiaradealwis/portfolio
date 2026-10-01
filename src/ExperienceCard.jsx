// Experience entry: dates on the left, role and details on the right.
// Fields: title = role, subtitle = company, meta = dates, location,
// description = short intro, bullets = list of achievements, tags = skills.
export default function ExperienceCard({
                                           title,
                                           subtitle,
                                           meta,
                                           location,
                                           description,
                                           bullets,
                                           tags,
                                       }) {
    return (
        <article className="exp-entry">
            <div className="exp-when">
                {meta && <span className="exp-date">{meta}</span>}
                {location && <span className="exp-location">{location}</span>}
            </div>

            <div className="exp-main">
                <h3 className="exp-role">{title}</h3>
                {subtitle && <p className="exp-company">{subtitle}</p>}
                {description && <p className="exp-desc">{description}</p>}

                {bullets?.length > 0 && (
                    <ul className="exp-bullets">
                        {bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>
                )}

                {tags?.length > 0 && (
                    <ul className="exp-tags">
                        {tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                )}
            </div>
        </article>
    );
}
