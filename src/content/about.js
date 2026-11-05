import { site } from './site';

/** Content for the About me page. Add, remove or reorder entries freely. */

export const hero = {
  eyebrow: 'Computer scientist · Cambridge',
  greeting: 'Hi, I’m',
  highlight: 'Thiara',
  tagline:
    'A computer scientist exploring AI, intelligent systems, and how we build technology that works for people.',
  actions: [
    { label: 'Get in touch', href: site.contact.href, variant: 'solid' },
    { label: 'See my work', to: '/projects', variant: 'outline' },
  ],
};

export const codeCard = {
  filename: 'portfolio.ts',
  variable: 'currently',
  fields: [
    { key: 'role', value: 'Computer science student' },
    { key: 'institution', value: 'University of Cambridge' },
    { key: 'studying', value: 'Human Inspired AI' },
  ],
};

export const interests = [
  'Artificial intelligence',
  'Intelligent systems',
  'Human-inspired AI',
  'People & technology',
  'Responsible design',
];

export const intro = {
  label: 'A little about me',
  paragraphs: [
    'I’m currently studying my masters in Human Inspired AI at the University of Cambridge. In both my work and research I’m interested by the relationship between people and technology, and especially what happens when we put AI into the mix.',
    'I like exploring both the technical side of building intelligent systems and the very human questions that come with them: how we use them, how we understand them, and whether we actually want them in the first place! Read on for a little bit more about my background or check out my projects and publications above!',
  ],
};

export const education = [
  {
    id: 'cambridge-mphil',
    dates: '2026 – 2027',
    title: 'MPhil Human Inspired AI',
    institution: 'University of Cambridge',
    note: 'Ongoing',
  },
  {
    id: 'bristol-bsc',
    dates: '2023 – 2026',
    title: 'BSc Computer Science',
    institution: 'University of Bristol',
    note: 'First Class Honours',
  },
];

export const experience = [
  {
    id: 'deepmind-research-ready',
    dates: 'June 2026 – Aug 2026',
    location: 'Edinburgh, UK',
    role: 'Google DeepMind Research Ready Intern',
    organisation: 'APRIL AI Hub, University of Edinburgh',
    highlights: [
      'Led an ML research project investigating topological data analysis and persistent homology for polycrystalline TEM image segmentation.',
      'Developed and benchmarked image-processing pipelines against conventional descriptors.',
      'Contributed as second author to a subsequent paper accepted to the NeurIPS 2026 AI4MAT Workshop.',
    ],
    tags: [
      'Kubernetes',
      'Image Processing',
      'Machine Learning',
      'Topological Data Analysis',
      'Image Segmentation',
      'Model Benchmarking',
    ],
  },
  {
    id: 'softwire-intern',
    dates: 'June 2025 – Aug 2025',
    location: 'London, UK',
    role: 'Software Engineering Intern',
    organisation: 'Softwire Consulting',
    highlights: [
      'Developed a full-stack Carbon Insights Dashboard for external client Elexon as part of an agile software engineering team, using TypeScript, C# and Nivo to build data visualisation features.',
      'Collaborated with clients to refine requirements and conducted user research and usability testing, translating feedback into product features aligned with business needs.',
    ],
    tags: ['TypeScript', 'C#', 'React', 'Agile', 'AWS'],
  },
  {
    id: 'bristol-ta',
    dates: 'Sep 2025 – June 2026',
    location: 'Bristol, UK',
    role: 'Teaching Assistant',
    organisation: 'University of Bristol',
    highlights: [
      'Provided academic support for Software Engineering Project and Programming Languages & Computation courses, delivering clear explanations of complex topics, mentoring student teams, and aiding hands-on labs and discussions to encourage student learning.',
    ],
    tags: ['Programming Languages', 'Types', 'Functional Programming', 'CI/CD'],
  },
];
