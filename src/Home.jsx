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
            <p className="bio">
                I'm currently studying my masters in Human Inspired AI at the University of Cambridge. In both my work and research, I'm particularly interested by the relationship between people and technology, and especially by what happens when we put AI into that mix. I like exploring both the technical side of building intelligent systems and the very human questions that come with them - how we use them, how we understand them, and whether we actually want them in the first place. Read on for a little bit more about my background, or check out my projects and publications above!
            </p>
            {homeSections.map((section) => (
                <Section key={section.id} {...section} />
            ))}
        </>
    );
}