import usePageTitle from '../hooks/usePageTitle';
import PublicationSection from '../components/publications/PublicationSection';
import { journalism, publications } from '../content/publications';   // add journalism to this import
import JournalismSection from '../components/publications/JournalismSection';   // new import

export default function PublicationsPage() {
  usePageTitle(publications.title);
  return (
      <div className="publications">
        <h1 className="visually-hidden">{publications.title}</h1>
        {publications.sections.map(({ id, ...section }) => (
            <>
              <PublicationSection key={id} {...section} />
              <JournalismSection {...journalism} />
            </>
        ))}
      </div>
  );
}
