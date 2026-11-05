export default function DocumentEmbed({ label, src }) {
    return (
        <figure className="document">
            <figcaption className="document__label">{label}</figcaption>
            <object className="document__frame" data={`${src}#view=FitH`} type="application/pdf" aria-label={label}>
                <p>
                    This browser can’t display the PDF here.{' '}
                    <a href={src} target="_blank" rel="noopener noreferrer">Open {label}</a>
                </p>
            </object>
            <a className="document__link" href={src} target="_blank" rel="noopener noreferrer">
                Open in new tab ↗
            </a>
        </figure>
    );
}