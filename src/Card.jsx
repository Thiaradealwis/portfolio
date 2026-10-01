import styled from "styled-components";
const Card = ({ title, subtitle, meta, highlight, description, tags, href }) => {
    const linkProps = href ? { href, target: "_blank", rel: "noreferrer" } : {};

    return (
        <StyledWrapper>
            {href ? (
                <a className="ed-stat-card ed-stat-card--link" {...linkProps}>
                    <Inner {...{ title, subtitle, meta, highlight, description, tags }} />
                </a>
            ) : (
                <article className="ed-stat-card">
                    <Inner {...{ title, subtitle, meta, highlight, description, tags }} />
                </article>
            )}
        </StyledWrapper>
    );
};

const Inner = ({ title, subtitle, meta, highlight, description, tags }) => (
    <>
        <header className="ed-stat-card__eyebrow">
            <span>{subtitle}</span>
            {meta && <span>{meta}</span>}
        </header>
        <hr className="ed-stat-card__rule" />
        <div className="ed-stat-card__figure">
            <h3 className="ed-stat-card__numeral">{title}</h3>
            {highlight && <span className="ed-stat-card__unit">{highlight}</span>}
        </div>
        {description && <p className="ed-stat-card__caption">{description}</p>}
        {tags?.length > 0 && (
            <ul className="ed-stat-card__tags">
                {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        )}
    </>
);

const StyledWrapper = styled.div`
  height: 100%;

  .ed-stat-card {
    --ink: #1a1614;
    --muted: #6b645d;
    --hairline: #e5dfd6;
    --hairline-strong: #d6cfc3;
    --surface: #ffffff;
    --crimson: #f00045;
    --ease: cubic-bezier(0.3, 0.7, 0.4, 1);

    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    min-height: 320px;
    padding: 32px;
    border: 1px solid var(--hairline);
    border-radius: 12px;
    background: var(--surface);
    color: var(--ink);
    text-decoration: none;
    font-family:
      "Inter Tight",
      ui-sans-serif,
      system-ui,
      -apple-system,
      sans-serif;
    transition: border-color 220ms var(--ease);
  }

  .ed-stat-card:hover {
    border-color: var(--hairline-strong);
  }

  .ed-stat-card--link:focus-visible {
    outline: 3px solid var(--ink);
    outline-offset: 3px;
  }

  .ed-stat-card__eyebrow {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .ed-stat-card__rule {
    margin: 16px 0 20px;
    border: 0;
    border-top: 1px solid var(--hairline);
  }

  .ed-stat-card__figure {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-family: "Instrument Serif", "Times New Roman", Georgia, serif;
    color: var(--ink);
  }

  .ed-stat-card__numeral {
    margin: 0;
    font-size: 2rem;
    line-height: 1;
    letter-spacing: 0.01em;
    font-weight: 400;
  }

  .ed-stat-card__unit {
    margin-top: 0.2em;
    font-size: 1.1rem;
    line-height: 1;
    color: var(--crimson);
    white-space: nowrap;
  }

  .ed-stat-card__caption {
    margin: 14px 0 0;
    font-family: "Instrument Serif", "Times New Roman", Georgia, serif;
    font-style: italic;
    font-size: 1.1rem;
    line-height: 1.35;
    color: var(--muted);
    letter-spacing: -0.005em;
  }

  .ed-stat-card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 20px 0 0;
    padding: 0;
    list-style: none;
  }

  .ed-stat-card__tags li {
    padding: 3px 10px;
    border: 1px solid var(--hairline-strong);
    border-radius: 999px;
    font-size: 0.75rem;
    color: var(--muted);
  }
`;

export default Card;