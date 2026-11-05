import Pill from '../ui/Pill';
import SectionHeading from '../ui/SectionHeading';
import TimelineRow from '../ui/TimelineRow';

function ExperienceEntry({ dates, location, role, organisation, highlights, tags }) {
  return (
    <TimelineRow meta={[dates, location]}>
      <h3 className="timeline-title">{role}</h3>
      <p className="timeline-sub">{organisation}</p>
      <ul className="highlights">
        {highlights.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
      <ul className="pill-list">
        {tags.map((tag) => (
          <Pill key={tag} size="sm">{tag}</Pill>
        ))}
      </ul>
    </TimelineRow>
  );
}

export default function Experience({ entries }) {
  return (
    <section>
      <SectionHeading>Experience</SectionHeading>
      {entries.map(({ id, ...entry }) => (
        <ExperienceEntry key={id} {...entry} />
      ))}
    </section>
  );
}
