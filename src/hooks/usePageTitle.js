import { useEffect } from 'react';
import { site } from '../content/site';

/** Sets the browser tab title, e.g. "Projects · Thiara de Alwis". */
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : site.name;
  }, [title]);
}
