import { Link } from 'react-router-dom';

/** Pill button. Pass `to` for in-site routes or `href` for external links. */
export default function Button({ to, href, variant = 'solid', children }) {
  const className = `btn btn--${variant}`;
  if (to) return <Link className={className} to={to}>{children}</Link>;
  return <a className={className} href={href}>{children}</a>;
}
