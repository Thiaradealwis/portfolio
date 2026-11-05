/**
 * Content for the Projects page. Each item becomes a card; clicking it opens a popup.
 * Required: id, category, year, title, summary.   Optional: tags, details.
 * details (all optional): paragraphs: string[], highlights: string[], links: { label, href }[]
 */
export const projects = {
  title: 'Projects',
  items: [
    {
      id: 'persistent-homology-tem',
      category: 'Research Project',
      year: '2026',
      title: 'Persistent Homology for the Quantification of Microstructures in TEM Images',
      summary:
          'Investigated the use of topological data analysis and persistent homology for segmenting polycrystalline TEM images. Developed and benchmarked image-processing pipelines against conventional descriptors, contributing to a subsequent paper accepted to the NeurIPS 2026 AI4MAT Workshop as second author.',
      tags: ['Image Processing', 'Machine Learning', 'Topological Data Analysis', 'Image Segmentation', 'Model Benchmarking', 'Kubernetes'],
      details: {
        paragraphs: ['This project investigated the implementation of persistent homology as an analysis tool for HRTEM images, specifically focusing on both crystal segmentation and the investigation of clusters exhibiting varying levels of order and disorder. Github Access is not available due to privacy reasons, but a project overview can be found below:'],
        links: [],
        documents: [{ label: 'Abstract', src: '/docs/persistent-homology-abstract.pdf' }],
      },
    },
    {
      id: 'adaptive-ai-mediation',
      category: 'Undergraduate Dissertation',
      year: '2026',
      title: 'Adaptive AI based Mediation for Collaborative Decision Making under Hidden Profile Conditions',
      summary:
          'Designed and implemented an LLM-based multi-agent mediation system for collaborative decision-making using AWS, JavaScript, Socket.IO and OpenAI APIs. Developed observer agents to monitor participation, information sharing and group convergence, and evaluated the system through focus group user testing and interviews.',
      tags: ['AWS', 'Javascript', 'LLM APIs (OpenAI)', 'Socket.io', 'User Testing & Interviews', 'Multi-Agent Systems'],
      details: {
        paragraphs: ['Github: https://github.com/Thiaradealwis/dissertation-chat_app_multi_agent'],
        links: [],
        documents: [{ label: 'Abstract', src: '/docs/ThiaradeAlwis_AIMediationForGroupDecisions_Poster.pdf' }],
        },
    },
    {
      id: 'multi-agent-maze-solving',
      category: 'Agentic AI',
      year: '2026',
      title: 'Multi Agent Maze Solving',
      summary:
          'Designed and implemented a multi-agent maze-solving system from scratch in Prolog, applying core AI principles such as multi-agent coordination, knowledge representation, and search algorithms to enable agents to collaboratively navigate complex environments.',
      tags: ['Prolog', 'Multi-Agent Systems', 'Knowledge Representation', 'Search Algorithms'],
      details: {},
    },
    {
      id: 'game-of-life-go',
      category: 'Distributed & Parallel Computing',
      year: '2025',
      title: 'Game of Life Implementation (Go)',
      summary:
          'Designed and implemented distributed and parallelised versions of Conway’s Game of Life in Go, using goroutines and concurrency patterns. Conducted benchmarking to evaluate speedup and resource usage and wrote a detailed report analysing design choices, performance results.',
      tags: ['Go', 'Concurrency', 'Distributed Systems', 'Benchmarking'],
      details: {},
    },
    {
      id: 'sepsis',
      category: 'Machine Learning & Data Science',
      year: '2026',
      title: 'Early Prediction of Sepsis',
      summary:
          'Built and benchmarked multiple models (GRU, XGBoost, LR) to predict sepsis onset from the PhysioNet 2019 Challenge dataset of hourly medical patient data, engineering features to handle missingness and temporal trends in irregular data. I led the interpretability and actionable ML components of the project, applying SHAP analysis and clustering to extract clinically meaningful insights, including the identification of two distinct pre-septic patient subgroups based on treatment metadata.',
      tags: ['Python', 'Machine Learning', 'Time Series Modelling', 'Feature Engineering', 'Model Explainability'],
      details: {
        documents: [{ label: 'Abstract', src: '/docs/ADS_report.pdf' }],

      },
    },
  ],
};
