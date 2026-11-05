import { Link, NavLink } from 'react-router-dom';
import { site } from '../../content/site';

function Logo() {
  return (
    <Link to="/" className="logo">
      <span className="logo__stripes" aria-hidden="true">
        <span /><span /><span />
      </span>
      {site.name}
    </Link>
  );
}

export default function Header() {
  return (
    <header className="container site-header">
      <Logo />
      <nav aria-label="Main" className="site-nav">
        {site.nav.map(({ label, to }) => (
          <NavLink key={to} to={to} end className="site-nav__link">
            {label}
          </NavLink>
        ))}
        <a href={site.contact.href} className="btn btn--outline btn--sm">
          {site.contact.label}
        </a>
      </nav>
    </header>
  );
}
