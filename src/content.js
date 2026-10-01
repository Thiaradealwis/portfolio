// To add a card, copy an object into the right list and edit it.
// To add a section to the home page, add an entry to `homeSections` at the bottom.
// `variant` picks the layout: "education", "experience" or "projects".
// Every field except `title` is optional. `highlight` is the short crimson note
// next to the title (a grade, role or award).

export const education = [
    {
        title: "MPhil Human Inspired Artificial Intelligence",
        subtitle: "University of Cambridge",
        highlight: "Ongoing",
        meta: "2026-2027",
        description: "",
        tags: [""],
    },
    {
        title: "BSc Computer Science",
        subtitle: "University of Bristol",
        highlight: "First Class Honours",
        meta: "2023 – 2026",
        description: "Majors: Artificial Intelligence & Human-Computer Interaction",
    },
];

export const projects = [
    {
        title: "Persistent Homology for the Quantification of Microstructures in TEM Images",
        subtitle: "Research Project",
        meta: "2026",
        description: "Investigated the use of topological data analysis and persistent homology for segmenting polycrystalline TEM images. Developed and benchmarked image-processing pipelines against conventional descriptors, contributing to a subsequent paper accepted to the NeurIPS 2026 AI4MAT Workshop as second author.",
        tags: ["Image Processing", "Machine Learning", "Topological Data Analysis", "Image Segmentation", "Model Benchmarking", "Kubernetes"],
    },

    {
        title: "Adaptive AI based Mediation for Collaborative Decision Making under Hidden Profile Conditions",
        subtitle: "Undergraduate Dissertation",
        meta: "2026",
        description: "Designed and implemented an LLM-based multi-agent mediation system for collaborative decision-making using AWS, JavaScript, Socket.IO and OpenAI APIs. Developed observer agents to monitor participation, information sharing and group convergence, and evaluated the system through focus group user testing and interviews.",
        tags: ["AWS", "Javascript", "LLM APIs (OpenAI)", "Socket.io", "User Testing & Interviews", "Multi-Agent Systems"],
    },

    {
        title: "Multi Agent Maze Solving",
        subtitle: "Agentic AI",
        meta: "2026",
        description: "Designed and implemented a multi-agent maze-solving system from scratch in Prolog, applying core AI principles such as multi-agent coordination, knowledge representation, and search algorithms to enable agents to collaboratively navigate complex environments.",
        tags: ["Prolog", "Logic Programming", "Search Algorithms", "Multi-Agent Systems"],
    },

    {
        title: "Game of Life Implementation (Go) ",
        subtitle: "Distributed & Parallel Computing",
        meta: "2025",
        description: "Designed and implemented distributed and parallelised versions of Conway’s Game of Life in Go, using  goroutines and concurrency patterns. Conducted benchmarking to evaluate speedup and resource usage and wrote a detailed report analysing design choices, performance results, and optimisation strategies.",
        tags: ["Go", "Distributed Programming", "Parallel Programming", "System Benchmarking"],
    },

    {
        title: "Early Prediction of Sepsis ",
        subtitle: "Machine Learning & Data Science",
        meta: "2026",
        description: "Built and benchmarked multiple models (GRU, XGBoost, LR) to predict sepsis onset from the PhysioNet 2019 Challenge dataset of hourly medical patient data, engineering features to handle missingness and temporal trends in irregular data. I led the interpretability and actionable ML components of the project, applying SHAP analysis and clustering to extract clinically meaningful insights, including the identification of two distinct pre-septic patient subgroups based on treatment metadata.",
        tags: ["Python", "Machine Learning", "Time series Modelling", "Feature Engineering", "Model Evaluation"],
    },
];

export const experience = [
    {
        title: "Google DeepMind Research Ready Intern",
        subtitle: "APRIL AI Hub, University of Edinburgh",
        meta: "Jun 2026 – Aug 2026",
        location: "Edinburgh, UK",
        description: "One sentence on the team and what you were there to do.",
        bullets: [
            "Led an ML research project investigating topological data analysis and persistent homology for polycrystalline TEM image segmentation.",
            "Developed and benchmarked image-processing pipelines against conventional descriptors.",
            "Contributed as second author to a subsequent paper accepted to the NeurIPS 2026 AI4MAT Workshop."
        ],
        tags: ["Image Processing", "Machine Learning", "Topological Data Analysis", "Image Segmentation", "Model Benchmarking", "Kubernetes"],
    },
    {
        title: "Software Engineer Intern",
        subtitle: "Softwire Consulting",
        meta: "Jun 2025 – Aug 2025",
        location: "London, UK",
        bullets: ["Developed a full-stack Carbon Insights Dashboard for external client Elexon as part of an agile software engineering team, using TypeScript, C# and Nivo to build data visualisation features.",
        "Collaborated with clients to refine requirements and conducted user research and usability testing, translating feedback into product features aligned with business needs."],
        tags: ["Typescript", "C#", "React"],
    },
    {
        title: "Teaching Assistant",
        subtitle: "University of Bristol",
        meta: "Sep 2025 – Jun 2026",
        location: "Bristol, UK",
        bullets: ["Provided academic support for Software Engineering Project and Programming Languages & Computation courses, delivering clear explanations of complex topics, mentoring student teams, and aiding hands-on labs and discussions to encourage student learning."],
        tags: ["Programming Languages", "Types", "Agile Development"],
    },
];

export const academia = [
    {
        title: "Benchmarking featurisation methods for segmenting HRTEM images",
        subtitle: "NeurIPS 2026 AI4MAT Workshop",
        meta: "2026",
        description: "Alexandros Dimitrios Keros" +
            ", Thiara de Alwis, Ben D. Rowlinson, Themis Prodromakis",

    },
];

// Sections shown on the home page (About me).
export const homeSections = [
    { id: "education", title: "Education", items: education, variant: "education" },
    { id: "experience", title: "Experience", items: experience, variant: "experience" },
];