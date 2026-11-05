/**
 * Content for the Publications page, grouped into sections.
 * Add an item to a section's `items` (give it a unique `id`) or add a whole new section.
 * `href` is optional: when set, the title becomes a link.
 */
export const publications = {
  title: 'Publications',
  sections: [
    {
      id: 'academia',
      heading: 'Academia',
      items: [
        {
          id: 'hrtem-featurisation-benchmark',
          year: '2026',
          title: 'Benchmarking featurisation methods for segmenting HRTEM images',
          venue: 'NeurIPS 2026 AI4MAT Workshop',
          authors: [
            'Alexandros Dimitrios Keros',
            'Thiara de Alwis',
            'Ben D. Rowlinson',
            'Themis Prodromakis',
          ],
          href: '',
        },
      ],
    },

  ],
};
/** Journalism articles. Each title is displayed as a link. */
export const journalism = {
  heading: 'Journalism',
  items: [
    { id: '1-id', year: '2025', title: 'Whose morals matter? Programming the ethical compass', venue: 'Epigram', href: 'https://epigram.org.uk/whose-morals-matter-programming-the-ethical-compass/' },
    { id: '2-id', year: '2023', title: 'Is AI a Threat To Women? The Dangers of Programs That Do It For You', venue: 'HerCampus', href: 'https://www.hercampus.com/school/bristol/is-ai-a-threat-to-women-the-dangers-of-programs-that-do-it-for-you/' },
  ],
};
