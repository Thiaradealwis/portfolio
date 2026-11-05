# Thiara de Alwis: portfolio

React + Vite site. All text lives in `src/content/`; components only render it.

## Run
```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist
```

## Editing content
| To change…                          | Edit                          |
| ----------------------------------- | ----------------------------- |
| Name, nav, contact link, footer     | `src/content/site.js`         |
| Hero, interests, intro, education, experience | `src/content/about.js` |
| Projects page                       | `src/content/projects.js`     |
| Publications page                   | `src/content/publications.js` |

Add an object to an array to add an entry (give it a unique `id`). Colours, fonts and shadows are in `src/styles/tokens.css`.

## Structure
```
src/
  content/      text only (no JSX)
  components/
    layout/     Header, Footer, Layout, ContentPage
    ui/         Button, Pill, SectionHeading, TimelineRow
    about/      sections of the About page
  pages/        one thin file per route
  hooks/        usePageTitle
  styles/       tokens, base, layout, ui, about
```
New page: add `content/x.js`, `pages/XPage.jsx`, a `<Route>` in `App.jsx` and a nav entry in `site.js`.
Deploying on Netlify: build command `npm run build`, publish directory `dist` (`public/_redirects` handles routing).
