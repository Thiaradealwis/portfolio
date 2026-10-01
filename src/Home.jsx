import { Link } from "react-router-dom";
import Section from "./Section.jsx";
import { homeSections } from "./content.js";

export default function Home() {
    return (
        <>
            <header className="hero">
                <div className="hero-text">
                    <div className="gap"></div>
                    <h1>Hi, I’m Thiara</h1>
                    <p>
                        – a computer scientist exploring AI, intelligent systems, and how
                        we build technology that works for people.
                    </p>
                </div>
                <div className="hero-actions">
                    <a className="btn btn-outline" href="#contact">Get in touch</a>
                    <Link className="btn btn-solid" to="/projects">See my work</Link>
                </div>
            </header>
            <div className="gap"></div>
            <div className="gap"></div>
            <p>
                A bit about me...
            </p>
            {homeSections.map((section) => (
                <Section key={section.id} {...section} />
            ))}
        </>
    );
}