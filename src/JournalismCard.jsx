export default function JournalismCard({ title, link, pubDate, description }) {
    const date = new Date(pubDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const cleanDescription = description
        ?.replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .trim();

    return (
        <article className="journalism-card">
            <p className="journalism-date">{date}</p>

            <h3>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {title}
                </a>
            </h3>

            {cleanDescription && (
                <p className="journalism-excerpt">
                    {cleanDescription.slice(0, 220)}
                    {cleanDescription.length > 220 ? "..." : ""}
                </p>
            )}

            <a
                className="journalism-read"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                Read article →
            </a>
        </article>
    );
}