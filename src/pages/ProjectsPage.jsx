import { useState } from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { projects } from '../content/projects';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';

export default function ProjectsPage() {
  usePageTitle(projects.title);
  const [selected, setSelected] = useState(null);

  return (
      <section className="projects">
        <h1 className="projects__heading">{projects.title}</h1>
        <div className="projects__grid">
          {projects.items.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={() => setSelected(project)} />
          ))}
        </div>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </section>
  );
}
