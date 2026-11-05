/** Category (left) and year (right) with a rule underneath. Shared by the card and the popup. */
export default function ProjectMeta({ category, year }) {
    return (
        <div className="project-meta">
            <span>{category}</span>
            <span>{year}</span>
        </div>
    );
}