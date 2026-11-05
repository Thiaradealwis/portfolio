import Pill from '../ui/Pill';
import ProjectMeta from './ProjectMeta';

/** The title is a real button stretched over the whole card, so the card is keyboard accessible. */
export default function ProjectCard({ project, onOpen }) {
    const { category, year, title, summary, tags = [] } = project;
    return (
        <article className="project-card">
            <ProjectMeta category={category} year={year} />
            <h2 className="project-card__title">
                <button type="button" className="project-card__open" onClick={onOpen}>
                    {title}
                </button>
            </h2>
            <p className="project-card__summary">{summary}</p>
            <ul className="pill-list project-card__tags">
                {tags.map((tag) => (
                    <Pill key={tag} size="sm">{tag}</Pill>
                ))}
            </ul>
        </article>
    );
}