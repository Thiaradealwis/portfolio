import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import Journalism from "./Journalism.jsx";
import ContactCard from "./Contact.jsx";

function Layout() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="page">
            <Nav hidden={isHome && !scrolled} isHome={isHome} />

            <Outlet />

            <footer className="section" id="contact">
                <h2>Get in touch</h2>
                <ContactCard />
            </footer>
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="journalism" element={<Journalism />} />
            </Route>
        </Routes>
    );
}