import PublicationItem from './PublicationItem';

export default function PublicationSection({ heading, items }) {
    return (
        <section className="publication-section">
            <h2 className="publication-section__heading">{heading}</h2>
            {items.map(({ id, ...item }) => (
                <PublicationItem key={id} {...item} />
            ))}
        </section>
    );
}