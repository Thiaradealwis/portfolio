import { NavLink } from "react-router-dom";

// Name and About me both go to the home page (education and experience).
export default function Nav({ hidden, isHome }) {
    return (
        <nav className={`nav ${isHome ? "nav-home" : ""} ${hidden ? "nav-hidden" : ""}`}>
            <NavLink to="/" className="nav-name">
                Thiara de Alwis
            </NavLink>

            <ul className="nav-links">
                <li><NavLink to="/" end>About me</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/journalism">Publications</NavLink></li>
            </ul>
        </nav>
    );
}