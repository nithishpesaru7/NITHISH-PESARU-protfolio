import { UserProfile, SkillItem, ProjectItem, MilestoneItem } from '../types/portfolio';

export const initialProfile: UserProfile = {
  name: 'Nithish Pesaru',
  headline: 'Aspiring AI Engineer & 1st-Year B.Tech Computer Science Student',
  academicStatus: 'First-Year Undergraduate (B.Tech in Computer Science & Engineering)',
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  collegeName: '[Your College / University Name]',
  regNumber: '[Student ID / Reg. No.]',
  graduationYear: '[Expected 2028]',
  email: 'nithishpesaru7@gmail.com',
  githubUrl: 'https://github.com/nithishpesaru7',
  linkedinUrl: 'https://linkedin.com/in/[your-linkedin-profile]',
  location: '[Your City / State, India]',
  bio: 'I am a first-year Computer Science undergraduate passionate about building the next generation of intelligent software. Currently immersing myself in foundational Python programming, algorithmic problem solving, core web technologies, and the mathematical and conceptual underpinnings of artificial intelligence and machine learning. My objective is to evolve into a proficient AI Engineer capable of deploying reliable, production-grade intelligent systems.',
  focusAreas: [
    'Python & Foundational Data Structures',
    'Applied Artificial Intelligence & Machine Learning',
    'Generative AI Concepts & Prompt Engineering',
    'Responsive Web Development (HTML, CSS, Modern UI)',
    'Algorithmic Thinking & Computational Logic'
  ],
  careerAmbitions: [
    'Master core Python and transition into advanced scientific libraries (NumPy, Pandas, PyTorch).',
    'Deepen understanding of machine learning algorithms, calculus, and linear algebra for AI.',
    'Build end-to-end AI applications bridging clean web interfaces with intelligent backends.',
    'Earn verified industry credentials and contribute actively to open-source software on GitHub.'
  ]
};

export const skillsData: SkillItem[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    level: 'Beginner / Active Learner',
    levelPercent: 45,
    description: 'Foundations of syntax, data types, control flow, functions, file handling, and basic OOP principles.',
    keyTopics: ['Variables & Data Types', 'Loops & Conditionals', 'Functions & Scope', 'Basic File I/O', 'Problem Solving']
  },
  {
    id: 'html',
    name: 'HTML5',
    category: 'web',
    level: 'Foundational',
    levelPercent: 60,
    description: 'Semantic markup, document structuring, accessibility conventions, and form architecture.',
    keyTopics: ['Semantic Tags', 'Document Structure', 'Forms & Inputs', 'Audio/Video Embeds', 'SEO Basics']
  },
  {
    id: 'css',
    name: 'CSS3',
    category: 'web',
    level: 'Foundational',
    levelPercent: 55,
    description: 'Modern layout systems (Flexbox, Grid), responsive styling, transitions, and utility-first frameworks.',
    keyTopics: ['Flexbox & Grid', 'Responsive Media Queries', 'Box Model & Colors', 'Gradients & Shadows', 'Transitions']
  },
  {
    id: 'genai',
    name: 'Basic Generative AI',
    category: 'ai',
    level: 'Active Explorer / Foundations',
    levelPercent: 40,
    description: 'Understanding LLM architecture basics, prompt design, tokenization, embeddings concept, and AI engineer workflows.',
    keyTopics: ['LLM Fundamentals', 'Prompt Engineering', 'Context Windows', 'AI Integration Concepts', 'Ethical AI Practices']
  },
  {
    id: 'git',
    name: 'Git & Version Control',
    category: 'tools',
    level: 'Foundational',
    levelPercent: 50,
    description: 'Repository management, branching, commit discipline, and collaborating through GitHub.',
    keyTopics: ['Git Init & Clone', 'Commits & Messages', 'Branching & Merging', 'Push / Pull Workflows', 'GitHub Hosting']
  },
  {
    id: 'vscode',
    name: 'VS Code & Dev Environment',
    category: 'tools',
    level: 'Daily Driver',
    levelPercent: 65,
    description: 'Configuring Python linters, debuggers, live preview environments, and terminal commands.',
    keyTopics: ['Python Extensions', 'Integrated Terminal', 'Debugging Basics', 'Code Formatting', 'Virtual Environments']
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'student-grade-calculator',
    title: 'Student Grade Calculator',
    subtitle: 'Python / GenAI Learning Project',
    status: 'Completed',
    statusNote: 'Interactive demo available below',
    description: 'An academic performance calculator engineered as part of my initial Python and GenAI foundational learning. The project calculates weighted semester GPAs, percentage scores, and grade letter classifications across multiple academic courses, accompanied by rule-driven personalized study recommendations inspired by prompt evaluation architectures.',
    techStack: ['Python', 'Algorithmic Grading', 'GenAI Feedback Logic', 'CLI / Web Interface'],
    highlights: [
      'Computes exact SGPA/CGPA and percentage based on standard university credit weightings.',
      'Includes input validation routines to reject invalid marks and credit allocations.',
      'Incorporates structured feedback generation analyzing weakest subject areas and proposing targeted study time.',
      'Includes an interactive in-browser simulator for instant testing.'
    ],
    learningOutcomes: [
      'Gained confidence in Python list structures, dictionaries, and nested conditional logic.',
      'Explored how rule-based heuristics can mirror generative feedback systems for students.',
      'Practiced modular code organization and error handling with custom input exceptions.'
    ],
    imageSrc: '/src/assets/images/project_grade_calculator_1794418632932.jpg',
    githubUrl: 'https://github.com/nithishpesaru7',
    demoType: 'grade_calc'
  },
  {
    id: 'python-basic-calculator',
    title: 'Python Basic Calculator',
    subtitle: 'Modular Arithmetic Engine',
    status: 'In Progress',
    statusNote: 'Active Development — Iteration 1 Completed',
    description: 'A modular command-line and interactive computational calculator built to reinforce core Python syntax, operator handling, arithmetic error guarding (zero-division traps), and structured loop control. Currently undergoing refactoring to support multi-step expressions and memory registers.',
    techStack: ['Python', 'Functions & Modular Design', 'Exception Handling', 'Interactive Simulator'],
    highlights: [
      'Clear separation of computational functions (addition, subtraction, multiplication, division, modulo, exponents).',
      'Robust runtime guardrails against ZeroDivisionError and non-numeric value inputs.',
      'Continuous execution loop with clean session reset and calculation history tracking.',
      'Work in progress: Expanding into expression parsing and parenthesis evaluation.'
    ],
    learningOutcomes: [
      'Deepened mastery of Python function definitions and return statements.',
      'Built custom exception management workflows for zero division and invalid tokens.',
      'Understood the value of iterative development from basic script to modular architecture.'
    ],
    githubUrl: 'https://github.com/nithishpesaru7',
    demoType: 'basic_calc'
  }
];

export const milestonesData: MilestoneItem[] = [
  {
    id: 'm1',
    title: 'Commenced B.Tech Computer Science Degree',
    category: 'Honest Milestone',
    date: 'Academic Year 2024–2025',
    description: 'Began undergraduate journey in Computer Science and Engineering, focusing on foundational mathematics, computational logic, and procedural programming.',
    isPlaceholder: false,
    statusLabel: 'Milestone Achieved'
  },
  {
    id: 'm2',
    title: 'First Python Programming Milestone',
    category: 'Honest Milestone',
    date: 'Foundational Phase',
    description: 'Built multiple functional command-line programs including arithmetic solvers, grade processors, and conditional algorithmic exercises.',
    isPlaceholder: false,
    statusLabel: 'Milestone Achieved'
  },
  {
    id: 'm3',
    title: 'Web Basics & Developer Environment Setup',
    category: 'Honest Milestone',
    date: 'Ongoing Practice',
    description: 'Configured local development toolchain (VS Code, Git, GitHub profile), and learned HTML/CSS layout techniques for displaying software projects.',
    isPlaceholder: false,
    statusLabel: 'Milestone Achieved'
  },
  {
    id: 'm4',
    title: 'AI Engineering & GenAI Foundations Kickoff',
    category: 'Honest Milestone',
    date: 'Current Focus',
    description: 'Started exploring generative AI principles, prompt framing, API structures, and the mathematical roadmaps required for machine learning mastery.',
    isPlaceholder: false,
    statusLabel: 'Active Journey'
  },
  {
    id: 'cert-1',
    title: '[Upcoming: Python Programming Certification]',
    category: 'Certificate Placeholder',
    date: 'Future Target',
    description: 'Reserved slot for official Python foundational assessment or verified course certificate upon semester examination completion.',
    isPlaceholder: true,
    statusLabel: 'Placeholder Slot'
  },
  {
    id: 'cert-2',
    title: '[Upcoming: Machine Learning / AI Foundations Certificate]',
    category: 'Certificate Placeholder',
    date: 'Future Target',
    description: 'Reserved slot for introductory Machine Learning / Deep Learning course completion credential.',
    isPlaceholder: true,
    statusLabel: 'Placeholder Slot'
  },
  {
    id: 'cert-3',
    title: '[Upcoming: Academic Excellence / Honor Roll Recognition]',
    category: 'Certificate Placeholder',
    date: 'Future Target',
    description: 'Reserved slot for first-year academic semester distinction, hackathon participation, or department recognition.',
    isPlaceholder: true,
    statusLabel: 'Placeholder Slot'
  }
];
