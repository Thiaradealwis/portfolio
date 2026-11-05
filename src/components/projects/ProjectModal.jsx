import { useEffect, useRef } from 'react';
import Pill from '../ui/Pill';
import ProjectMeta from './ProjectMeta';
import DocumentEmbed from './DocumentEmbed';

/** Large popup built on <dialog>: focus trap, Escape to close and backdrop come for free. */
export default function ProjectModal({ project, onClose }) {
    const dialogRef = useRef(null);
    const { category, year, title, summary, tags = [], details = {} } = project;
    const { paragraphs = [], highlights = [], links = [], documents = [] } = details;

    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog && !dialog.open) dialog.showModal();
    }, []);

    const closeOnBackdropClick = (event) => {
        if (event.target === dialogRef.current) onClose();
    };

    return (
        <dialog
            ref={dialogRef}
            className="project-modal"
            aria-labelledby="project-modal-title"
            onClose={onClose}
            onClick={closeOnBackdropClick}
        >
            <div className="project-modal__inner">
                <button type="button" className="project-modal__close" aria-label="Close" onClick={onClose}>
                    ×
                </button>
                <ProjectMeta category={category} year={year} />
                <h2 id="project-modal-title" className="project-modal__title">{title}</h2>
                <p className="project-card__summary">{summary}</p>

                {paragraphs.map((text) => (
                    <p key={text} className="project-modal__text">{text}</p>
                ))}
                {documents.map((doc) => (
                    <DocumentEmbed key={doc.src} {...doc} />
                ))}
                {links.length > 0 && (
                    <div className="project-modal__links">
                        {links.map(({ label, href }) => (
                            <a key={label} className="btn btn--outline btn--sm" href={href} target="_blank" rel="noopener noreferrer">
                                {label}
                            </a>
                        ))}
                    </div>
                )}
                <ul className="pill-list">
                    {tags.map((tag) => (
                        <Pill key={tag} size="sm">{tag}</Pill>
                    ))}
                </ul>
            </div>
        </dialog>
    );
}