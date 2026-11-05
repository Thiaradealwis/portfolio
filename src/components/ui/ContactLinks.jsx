import { site } from '../../content/site';
import { icons } from './icons';

const isExternal = (href) => href.startsWith('http');

export default function ContactLinks() {
    return (
        <nav className="contact-links" aria-label="Contact links">
            {site.socials.map(({ id, label, href }) => {
                const { viewBox, path } = icons[id];
                const externalProps = isExternal(href)
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {};
                return (
                    <a
                        key={id}
                        className={`social-link social-link--${id}`}
                        href={href}
                        aria-label={label}
                        title={label}
                        {...externalProps}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox={viewBox} aria-hidden="true">
                            <path d={path} />
                        </svg>
                    </a>
                );
            })}
        </nav>
    );
}