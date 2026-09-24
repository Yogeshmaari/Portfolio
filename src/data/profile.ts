export const profile = {
  name: 'Yogeshwaran KG',
  role: 'Full Stack Developer & ERPNext Developer',
  location: 'Krishnagiri, Tamil Nadu, India',
  email: 'yogeshkg916@gmail.com',
  phone: '+91 86678 33908',
  github: 'https://github.com/Yogeshmaari',
  linkedin: 'https://www.linkedin.com/in/yogeshwaran-govindaraj1602/',
  resumeUrl: '/resume.pdf',
  // Formspree endpoint for the contact form. Sign up free at https://formspree.io,
  // create a form, and replace this with the endpoint it gives you
  // (https://formspree.io/f/xxxxxxxx). Until it's replaced, the contact form
  // falls back to opening the visitor's email client instead of posting here.
  contactFormEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  intro:
    "I build production web interfaces with React and TypeScript, and I customize ERPNext (Frappe) systems end to end — DocTypes, workflows, server logic, and the APIs that connect them. Two years of full stack development, one year of hands-on ERPNext work.",
  about:
    "I'm a Full Stack Developer with 2 years of experience shipping React and TypeScript interfaces across startup and enterprise teams, and 1 year of hands-on ERPNext (Frappe) development — customizing DocTypes, workflows, server-side logic, and REST APIs across CRM, Manufacturing, Accounts, HR, and more. I move comfortably between frontend components and backend business logic, and I've debugged production ERP issues involving permissions, database queries, and document lifecycles.",
} as const

export const stats = [
  { n: '2 yrs', l: 'Full Stack development' },
  { n: '1 yr', l: 'ERPNext development' },
  { n: '11', l: 'ERPNext modules customized' },
] as const

export type SkillGroup = {
  key: string
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'fullstack',
    label: 'Full Stack',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Tailwind CSS', 'Python', 'REST APIs'],
  },
  {
    key: 'erpnext',
    label: 'ERPNext / Frappe',
    items: [
      'ERPNext',
      'Frappe Framework',
      'Custom DocTypes',
      'Client Scripts',
      'Server Scripts',
      'Reports',
      'Workflows',
      'Print Formats',
    ],
  },
  {
    key: 'database',
    label: 'Database',
    items: ['MySQL', 'MariaDB', 'PostgreSQL'],
  },
  {
    key: 'tools',
    label: 'Tools',
    items: ['Git', 'Linux', 'Postman', 'Claude AI', 'VS Code', 'Bench CLI'],
  },
]

export const erpModules = [
  'CRM',
  'Buying',
  'Selling',
  'Stock',
  'Manufacturing',
  'Accounts',
  'HRMS',
  'Projects',
  'Support',
  'Assets',
  'Quality',
] as const

export const erpCapabilities = [
  'Custom DocTypes',
  'Client Scripts',
  'Server Scripts',
  'Reports',
  'Workflows',
  'Print Formats',
  'REST API development',
  'Production bug fixing & debugging',
] as const

export type Experience = {
  title: string
  company: string
  location?: string
  period: string
  track: 'fullstack' | 'erpnext' | 'both'
  bullets: string[]
}

export const experience: Experience[] = [
  {
    title: 'Full Stack Developer / ERPNext Developer',
    company: 'Finstein',
    period: 'Dec 2025 — Present',
    track: 'both',
    bullets: [
      'Developed and customized ERPNext solutions using the Frappe Framework, Python, JavaScript, HTML, CSS, and MariaDB/MySQL across CRM, Buying, Selling, Stock, Manufacturing, Accounts, HRMS, Projects, Support, Assets, and Quality.',
      'Built DocTypes, Reports, Workflows, Client/Server Scripts, Print Formats, and REST APIs to meet business requirements.',
      'Built a Tender Management application during an internal hackathon, from user-flow design to a working, DocType-driven app.',
      'Debugged ERPNext functional and production issues across business logic, permissions, database queries, and document lifecycles, and ran security and vulnerability testing across modules.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Lumel',
    location: 'Chennai',
    period: 'Mar 2024 — Jun 2025',
    track: 'fullstack',
    bullets: [
      'Built responsive, reusable UI components with React.js, TypeScript, and Tailwind CSS across multiple application modules.',
      'Built interactive dashboards and pricing filter components using Recharts and React Context API for an internal analytics product.',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Jarvis Labs AI',
    location: 'Coimbatore',
    period: 'Nov 2023 — Mar 2024',
    track: 'fullstack',
    bullets: [
      'Developed responsive web interfaces with React.js and TypeScript, integrating REST APIs and MySQL-backed data.',
    ],
  },
  {
    title: 'Frontend Developer Trainee',
    company: 'Freshworks',
    location: 'Chennai',
    period: 'Aug 2022 — Nov 2023',
    track: 'fullstack',
    bullets: [
      'Built the frontend of SaHI AI, a document data-extraction platform, covering upload, processing, extraction, and results views.',
      'Built the frontend of a Blood Bank Management System with responsive layouts and interactive client-side features, integrating with a Java/MySQL backend.',
    ],
  },
]

export type Project = {
  name: string
  description: string
  tech: string[]
  features: string[]
  track: 'fullstack' | 'erpnext'
  github?: string
  demo?: string
  status: 'Private codebase' | 'Available on request'
}

export const projects: Project[] = [
  {
    name: 'ERPNext Customizations',
    description:
      'Custom ERPNext (Frappe) work at Finstein covering DocTypes, workflows, server-side logic, and REST APIs across 11 business modules, including a Tender Management app built during an internal hackathon.',
    tech: ['Frappe Framework', 'Python', 'JavaScript', 'MariaDB'],
    features: [
      'Custom DocTypes, Reports, and Print Formats',
      'Client and Server Script automation',
      'REST API endpoints for internal workflows',
      'Production debugging and security testing',
    ],
    track: 'erpnext',
    status: 'Private codebase',
  },
  {
    name: 'SaHI AI — Document Processing Platform',
    description:
      'Frontend for an AI-powered document data-extraction platform at Freshworks, covering the full document lifecycle from upload to results visualization.',
    tech: ['React.js', 'TypeScript', 'REST APIs'],
    features: [
      'Document upload and processing UI',
      'Extraction status and results views',
      'End-to-end API integration',
    ],
    track: 'fullstack',
    status: 'Private codebase',
  },
  {
    name: 'Blood Bank Management System',
    description:
      'A responsive web application for managing blood bank operations, built during my time at Freshworks with a Java/MySQL backend.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Java', 'MySQL'],
    features: [
      'Responsive donor and inventory layouts',
      'Interactive client-side features',
      'Frontend-to-database data flow',
    ],
    track: 'fullstack',
    status: 'Private codebase',
  },
  {
    name: 'Pricing & Analytics Dashboards',
    description:
      'Interactive dashboard charts and pricing filter components at Lumel, built for an internal analytics product used by internal teams.',
    tech: ['React.js', 'Recharts', 'Context API'],
    features: [
      'Chart and grid data visualizations',
      'Multi-filter pricing views',
      'Shared UI state via Context API',
    ],
    track: 'fullstack',
    status: 'Private codebase',
  },
]

export const education = [
  {
    title: 'B.Sc. Computer Science (In Progress)',
    org: 'University of Madras',
    period: '2025 — 2027 (Expected)',
  },
  {
    title: 'Frontend Development Training',
    org: 'Freshworks Academy',
    period: '2022 — 2023',
  },
] as const

export const certifications = ['JavaScript (Basic)', 'MySQL (Basic)', 'CSS (Basic)'] as const
