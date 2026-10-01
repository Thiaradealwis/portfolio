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
    const [navVisible, setNavVisible] = useState(true);

    useEffect(() => {
        if (!isHome) {
            setNavVisible(true);
            return;
        }

        const handleScroll = () => {
            // Always show the nav when at the top of the page
            if (window.scrollY <= 10) {
                setNavVisible(true);
            } else {
                setNavVisible(false);
            }
        };

        const handleMouseMove = (event) => {
            // Show the nav when the mouse reaches the top of the screen
            if (event.clientY <= 40) {
                setNavVisible(true);
            } else if (window.scrollY > 10) {
                setNavVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isHome]);

    return (
        <div className="page">
            <Nav
                hidden={isHome && !navVisible}
                isHome={isHome}
            />

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