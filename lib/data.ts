import type { ExperienceEntry, Project, SkillCategory } from "@/types/content";

/**
 * Central content store.
 *
 * Every value below is sourced directly from the candidate's CV
 * (`cv.txt`). Nothing is invented. Add or edit content here and the
 * portfolio updates automatically.
 */

/**
 * Deployment origin. Replace with the real production URL before launch.
 */
export const siteUrl = "https://arsh-vasani.vercel.app";

export const profile = {
  name: "Arsh Vasani",
  role: "Front-End Developer",
  location: "Ahmedabad, India",
  email: "arshvasani9@gmail.com",
  phone: "+91 94092 73874",
  profileUrl: "https://bold.pro/my/arsh-vasani/261r",
  /**
   * Short summary used in the hero, about section, and SEO metadata.
   */
  about: [
    "I'm a front-end developer focused on React and Next.js, building responsive interfaces that are fast, accessible, and a pleasure to use.",
    "Over the last few years I've shipped responsive templates and applications at WrapPixel and CloseDigit — working side by side with designers, reviewing code, and paying close attention to the details that make an interface feel considered.",
  ],
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const skills: SkillCategory[] = [
  {
    id: "core",
    index: "01",
    title: "Core Stack",
    description:
      "The tools I reach for daily to build production interfaces.",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "HTML & CSS",
      "Responsive Design",
      "shadcn/ui",
    ],
  },
  {
    id: "design",
    index: "02",
    title: "Design & UX",
    description:
      "Translating design intent into polished, usable interfaces.",
    skills: [
      "Figma",
      "UI Design",
      "Visual Design",
      "UX Design",
      "Framer",
    ],
  },
  {
    id: "quality",
    index: "03",
    title: "Engineering Practices",
    description:
      "Keeping the work consistent, reviewable, and easy to maintain.",
    skills: [
      "SEO Principles",
      "Code Review",
      "Testing & Debugging",
      "Cross-Browser",
      "MongoDB",
    ],
  },
  {
    id: "awareness",
    index: "04",
    title: "Cross-Stack Awareness",
    description:
      "Familiarity beyond the daily stack keeps integration friction low.",
    skills: ["AngularJS", "VueJS"],
  },
];

export const experience: ExperienceEntry[] = [
  {
    id: "wrappixel",
    company: "WrapPixel",
    location: "Ahmedabad, IN",
    role: "Front-End Developer",
    start: "Apr 2024",
    end: "Present",
    isCurrent: true,
    summary:
      "Building responsive website templates and components on the React and Next.js ecosystem.",
    highlights: [
      "Developed responsive templates with React, Next.js, and HTML that adapt cleanly across devices and browsers.",
      "Created reusable component libraries, reducing duplicate effort across future projects.",
      "Integrated front-end code with server-side logic to ship dynamic pages.",
      "Ran code reviews, testing, and debugging to keep quality high across browsers.",
      "Redesigned existing sites to improve navigation and visual appeal.",
    ],
    technologies: ["React", "Next.js", "HTML", "JavaScript"],
  },
  {
    id: "closedigit",
    company: "CloseDigit LLP",
    location: "Ahmedabad, IN",
    role: "Front-End Developer",
    start: "Jul 2022",
    end: "Apr 2024",
    summary:
      "Shipped responsive web applications while establishing disciplined engineering habits.",
    highlights: [
      "Built responsive web applications with HTML, CSS, and JavaScript, improving accessibility across devices.",
      "Collaborated with designers to craft intuitive interfaces that increased user engagement.",
      "Documented technical specifications to keep projects consistent and teams aligned.",
      "Maintained clean, valid HTML and CSS markup in line with industry standards.",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

/**
 * Projects come from `projects` only. Because the CV lists no case
 * studies, this array is intentionally empty — the Projects section
 * renders a designed, ready-to-extend showcase around it. Add entries
 * here and they will appear in the grid automatically.
 */
export const projects: Project[] = [];

export const contact = {
  email: profile.email,
  phone: profile.phone,
  location: profile.location,
  profileUrl: profile.profileUrl,
} as const;
