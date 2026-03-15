export const personalInfo = {
  name: "Mostafa Raslan",
  handle: "@Raslan07",
  title: "Full-Stack Developer",
  location: "Egypt 🇪🇬",
  email: "raslanspeed007@gmail.com",
  github: "https://github.com/Raslan07",
  linkedin: "https://linkedin.com/in/mostafa-hussin-145414347",
  facebook: "https://www.facebook.com/raslanr7",
  age: 21,
  education: "Faculty of Science, CS Dept.",
  bio: [
    "I'm a Computer Science student with a deep passion for front-end engineering and algorithms. I enjoy turning complex problems into clean, elegant interfaces — and I believe great software is both functionally solid and visually refined.",
    "My journey started with HTML & CSS, evolved through JavaScript and TypeScript, and now I'm building full React & Next.js applications following SOLID principles and Clean Architecture. I'm currently exploring the backend world with Node.js.",
    "Outside of code, I'm passionate about Prompt Engineering and love exploring how AI tools can accelerate development workflows.",
  ],
  languages: [
    { name: "Arabic", level: "Fluent", type: "primary" as const },
    { name: "English", level: "B1 Intermediate", type: "secondary" as const },
  ],
  stats: [
    { value: "26+", label: "GitHub Repositories", color: "accent" as const },
    { value: "10+", label: "Technologies", color: "accent2" as const },
    { value: "∞", label: "Curiosity", color: "accent3" as const },
  ],
};

export const skills = [
  {
    icon: "🎨",
    category: "Frontend Core",
    name: "HTML · CSS · Tailwind",
    tags: ["Semantic HTML5", "CSS Grid/Flexbox", "Tailwind CSS", "Responsive Design"],
    level: 90,
  },
  {
    icon: "⚡",
    category: "Language",
    name: "JavaScript · TypeScript",
    tags: ["ES2024+", "Async/Await", "TypeScript", "DOM APIs"],
    level: 85,
  },
  {
    icon: "⚛️",
    category: "Framework",
    name: "React · Next.js",
    tags: ["React Hooks", "Next.js App Router", "Vite", "SSR/SSG"],
    level: 80,
  },
  {
    icon: "🏗️",
    category: "Architecture",
    name: "SOLID · Clean Arch · Patterns",
    tags: ["SOLID Principles", "Clean Architecture", "Design Patterns", "React Patterns"],
    level: 75,
  },
  {
    icon: "🔢",
    category: "CS Fundamentals",
    name: "C++ · DSA",
    tags: ["Data Structures", "Algorithms", "OOP", "Problem Solving"],
    level: 78,
  },
  {
    icon: "🐍",
    category: "Other",
    name: "Python · SQL · Prompt Eng.",
    tags: ["Python Basics", "SQL Queries", "Prompt Engineering", "Node.js (Learning)"],
    level: 60,
  },
];

export const projects = [
  {
    icon: "🎯",
    name: "Task-of-Web",
    description:
      "A collection of front-end tasks and challenges demonstrating mastery of CSS layouts, Flexbox, Grid, and responsive design patterns from real-world UI scenarios.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Raslan07/Task-of-Web",
    live: null,
  },
  {
    icon: "📝",
    name: "TypeScript Notes",
    description:
      "Comprehensive TypeScript learning notes and code examples covering types, interfaces, generics, decorators, and advanced patterns with practical HTML demos.",
    stack: ["TypeScript", "HTML"],
    github: "https://github.com/Raslan07/typescript",
    live: null,
  },
  {
    icon: "🎨",
    name: "Frontend Mentor Designs",
    description:
      "Pixel-perfect implementations of Frontend Mentor challenges — responsive UI templates with attention to detail, accessibility, and modern CSS techniques.",
    stack: ["HTML", "CSS", "Responsive"],
    github: "https://github.com/Raslan07/Front-end-Mentor-Designs",
    live: null,
  },
  {
    icon: "⚔️",
    name: "CSS Battles",
    description:
      "Creative CSS challenge solutions — recreating complex visual designs with minimal markup using advanced CSS properties, pseudo-elements, and clever tricks.",
    stack: ["CSS", "HTML", "Creative CSS"],
    github: "https://github.com/Raslan07/CssBattels",
    live: null,
  },
  {
    icon: "⚛️",
    name: "Ultimate React Course",
    description:
      "Projects and exercises from the Ultimate React course — from hooks and context to advanced patterns, state management, and real-world application architecture.",
    stack: ["React", "JavaScript", "Vite"],
    github: "https://github.com/Raslan07/ultimate-react-course",
    live: null,
  },
  {
    icon: "🚀",
    name: "Coming Soon — Node.js",
    description:
      "Currently building backend projects with Node.js, Express, and REST APIs. Watch this space for upcoming full-stack applications with React frontends.",
    stack: ["Node.js", "Express", "In Progress"],
    github: "https://github.com/Raslan07",
    live: null,
  },
];

export const education = [
  {
    date: "2022 — PRESENT",
    title: "B.Sc. Computer Science",
    subtitle: "Faculty of Science · Computer Science Dept.",
  },
  {
    date: "2022",
    title: "High School Diploma",
    subtitle: "Egypt · Science Track",
  },
];

export const experience = [
  {
    date: "2024 — PRESENT",
    title: "Self-Taught Full-Stack Developer",
    subtitle: "React, Next.js, TypeScript, Node.js — building real projects and contributing on GitHub (26+ repos)",
  },
  {
    date: "2024",
    title: "Ultimate React Course",
    subtitle: "Completed comprehensive React training covering hooks, context, patterns, and architecture",
  },
  {
    date: "2023",
    title: "Frontend Mentor Challenges",
    subtitle: "Solved 10+ responsive design challenges — pixel-perfect CSS implementations",
  },
  {
    date: "2023",
    title: "CS Fundamentals",
    subtitle: "Studied Data Structures, Algorithms, and OOP through C++ — competitive programming practice",
  },
  {
    date: "NOW LEARNING",
    title: "Backend Development",
    subtitle: "Node.js, Express, REST APIs, databases — working toward full-stack proficiency",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];
