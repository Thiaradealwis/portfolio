import Card from "./Card.jsx";
import EducationEntry from "./EducationEntry.jsx";
import ExperienceCard from "./ExperienceCard.jsx";
import JournalismCard from "./JournalismCard.jsx";

const variants = {
    education: {
        Item: EducationEntry,
        className: "edu-list",
    },
    experience: {
        Item: ExperienceCard,
        className: "exp-list",
    },
    projects: {
        Item: Card,
        className: "project-grid",
    },
    journalism: {
        Item: JournalismCard,
        className: "journalism-list",
    },
};

export default function Section({
                                    id,
                                    title,
                                    items = [],
                                    variant = "projects",
                                }) {
    console.log("SECTION:", { id, variant });

    const config = variants[variant];

    if (!config) {
        return (
            <section className="section" id={id}>
                <h2>{title}</h2>
                <p>Unknown variant: {variant}</p>
            </section>
        );
    }

    const { Item, className } = config;

    return (
        <section className="section" id={id}>
            <h2>{title}</h2>

            <div className={className}>
                {items.map((item) => (
                    <Item
                        key={item.guid || item.title + (item.meta ?? "")}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
}