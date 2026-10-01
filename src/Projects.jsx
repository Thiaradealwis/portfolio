import Section from "./Section.jsx";
import { projects } from "./content.js";

export default function Projects() {
    return (
        <div className="subpage">
            <Section id="projects" title="Projects" items={projects} variant="projects" />
        </div>
    );
}