export const contact = {
  email: 'tpraveenk2003@gmail.com',
  phoneDisplay: '+91 82498 92879',
  phoneValue: '+918249892879',
  linkedin: 'https://www.linkedin.com/in/t-praveen-kumar-0b8a0b402/',
  linkedinLabel: 't-praveen-kumar-0b8a0b402',
  github: 'https://github.com/PraveenT256',
  githubLabel: 'github.com/PraveenT256',
  location: 'Gunupur, Rayagada, Odisha, India',
}

export const roles = [
  'Currently shipping multi-tenant SaaS platforms',
  'Building REST APIs with Node.js & Express',
  'Crafting interfaces with React.js & Material UI',
  'Modeling data with MongoDB & Mongoose',
]

export const experience = [
  {
    role: 'MERN Stack Developer',
    org: 'Empire',
    date: 'Feb 2026 – Jul 2026',
    description:
      'Worked on Blue Pixel, a full-stack property leasing and buying platform where organizations onboard, publish, and manage property listings end to end.',
    bullets: [
      'Built responsive frontend features with React.js (Vite) and Material UI, including property onboarding flows, Google Maps integration, and interactive listing pages.',
      'Developed Node.js/Express backend features for multi-tenant organization and property management with role-based access control (owners, org superadmins, platform admins) and property lifecycle handling (draft → published → deactivated).',
      'Managed data and database operations with MongoDB (Mongoose).',
      'Wrote unit and integration tests with Vitest, and followed structured logging, code review, and CI/CD practices in a Git/GitHub workflow.',
    ],
    link: { href: 'https://bluepxl.com/', label: 'bluepxl.com ↗' },
  },
  {
    role: 'Front-End & MERN Stack Development Intern',
    org: 'Ace Web Academy',
    date: 'May 2025 – Nov 2025',
    description:
      'Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Designed RESTful APIs and managed database operations. Collaborated via Git and GitHub for version control.',
  },
  {
    role: 'Front-End Development Intern',
    org: 'Glucian India Pvt. Ltd.',
    date: 'May 2023 – Jul 2023',
    description:
      'Developed responsive web interfaces using HTML, CSS, and JavaScript. Improved UI/UX consistency and performance across multiple projects while collaborating with developers to maintain design standards.',
  },
]

export const skillGroups = [
  { title: 'Languages', skills: ['JavaScript', 'TypeScript (basic)', 'HTML', 'CSS', 'SASS'] },
  { title: 'Frameworks & Libraries', skills: ['React.js', 'Node.js', 'Express.js', 'Bootstrap', 'jQuery', 'Material UI'] },
  { title: 'Databases', skills: ['MongoDB', 'Mongoose'] },
  { title: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Vitest'] },
]

export const projects = [
  {
    tag: 'Work · Production',
    title: 'Blue Pixel',
    description:
      'Multi-tenant SaaS platform for property leasing and buying. Organizations onboard, publish, and manage listings through a full lifecycle — draft, published, deactivated — with role-based access for owners, org superadmins, and platform admins.',
    chips: ['React (Vite)', 'Node.js', 'Express', 'MongoDB', 'Material UI'],
    link: { href: 'https://bluepxl.com/', label: 'Visit bluepxl.com' },
  },
  {
    tag: 'Personal · Open source',
    title: 'NexaChain AI',
    description:
      'A MERN-stack investment and referral platform (auth, daily ROI cron, multi-level referral tree). The live demo runs on seeded sample data with no real backend, payments, or accounts.',
    chips: ['React (Vite)', 'Node.js', 'Express', 'MongoDB'],
    links: [
      { href: 'https://praveent256.github.io/NEXACHAIN-AI/', label: 'Live Demo' },
      { href: 'https://github.com/PraveenT256/NEXACHAIN-AI', label: 'View on GitHub' },
    ],
  },
  {
    tag: 'Academic project',
    title: 'Tourism Management System',
    description:
      'Full-stack web application for managing tourism packages, bookings, and customer data. Improved booking efficiency using MongoDB and Node.js.',
    chips: ['Node.js', 'MongoDB', 'Full-stack'],
  },
  {
    tag: 'Personal · This site',
    title: 'Portfolio Website',
    description:
      'This portfolio itself — built with React (Vite), deployed on GitHub Pages with an automated CI/CD workflow that rebuilds and publishes on every push.',
    chips: ['React (Vite)', 'GitHub Actions', 'GitHub Pages'],
    links: [
      { href: 'https://praveent256.github.io/my-portfolio/', label: 'Live Site' },
      { href: 'https://github.com/PraveenT256/my-portfolio', label: 'View on GitHub' },
    ],
  },
]

export const education = [
  { role: 'B.Tech, Computer Science & Engineering', date: '2021 – 2025', description: 'Gandhi Institute for Technology, Bhubaneswar · CGPA 7.13' },
  { role: 'Intermediate', date: '2019 – 2021', description: 'Srigayatri Jr. College, Visakhapatnam · 65%' },
  { role: 'Matriculation', date: '2018 – 2019', description: 'Sarvani Vidyalaya, Srikakulam · 82%' },
]

export const achievements = [
  'Successfully completed multiple academic and industry projects with positive feedback.',
  'Consistent academic performance and active participation in hackathons.',
  'Quick learner with strong analytical and problem-solving skills, and a track record of team collaboration and leadership.',
]
