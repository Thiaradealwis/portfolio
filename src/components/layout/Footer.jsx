import { site } from '../../content/site';
import ContactLinks from '../ui/ContactLinks';

export default function Footer() {
    return (
        <footer id="contact" className="container site-footer">
            <h2 className="site-footer__heading">{site.contact.label}</h2>
            <ContactLinks />
        </footer>
    );
}
