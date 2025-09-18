export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  summary: string;
  profileImage?: string;
  tagline: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  features: string[];
  image?: string;
  category: string;
  featured: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export interface Language {
  name: string;
  proficiency: 'Native' | 'Fluent' | 'Advanced' | 'Intermediate' | 'Basic';
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  about: {
    story: string;
    values: string[];
    interests: string[];
  };
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Alex Johnson",
    title: "Full Stack Developer & UI/UX Designer",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "https://alexjohnson.dev",
    linkedin: "https://linkedin.com/in/alexjohnson",
    github: "https://github.com/alexjohnson",
    summary: "Passionate full-stack developer with 5+ years of experience building scalable web applications. Expert in React, Node.js, and cloud technologies. Strong background in UI/UX design with a focus on creating intuitive user experiences.",
    tagline: "Crafting digital experiences that inspire ✨"
  },
  experience: [
    {
      id: "exp-1",
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      startDate: "2022-01",
      endDate: "2024-12",
      current: true,
      description: [
        "Led development of microservices architecture serving 100K+ daily active users",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Mentored junior developers and conducted code reviews"
      ],
      achievements: [
        "Improved application performance by 40% through code optimization",
        "Reduced deployment time by 60% by implementing CI/CD pipelines",
        "Led migration from monolithic to microservices architecture"
      ]
    },
    {
      id: "exp-2",
      company: "StartupXYZ",
      position: "Full Stack Developer",
      location: "Remote",
      startDate: "2020-06",
      endDate: "2021-12",
      current: false,
      description: [
        "Developed and maintained web applications using React, Node.js, and PostgreSQL",
        "Implemented responsive designs and optimized for mobile devices",
        "Worked closely with product managers to define feature requirements"
      ],
      achievements: [
        "Built MVP that secured $2M in Series A funding",
        "Increased user engagement by 150% through UI/UX improvements",
        "Reduced page load time by 50% through performance optimization"
      ]
    },
    {
      id: "exp-3",
      company: "WebDev Agency",
      position: "Frontend Developer",
      location: "New York, NY",
      startDate: "2019-01",
      endDate: "2020-05",
      current: false,
      description: [
        "Created responsive websites for various clients using modern web technologies",
        "Collaborated with designers to implement pixel-perfect UI designs",
        "Maintained and updated existing client websites"
      ],
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Improved client satisfaction scores by 30%",
        "Established coding standards and best practices for the team"
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science",
      field: "Computer Science",
      location: "Berkeley, CA",
      startDate: "2015-09",
      endDate: "2019-05",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for 6 consecutive semesters",
        "President of Computer Science Student Association",
        "Completed senior capstone project on machine learning applications"
      ]
    }
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass", "Redux", "Vue.js"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Linux", "Nginx", "Jenkins", "Terraform"]
    },
    {
      category: "Design & Tools",
      skills: ["Figma", "Adobe Creative Suite", "Sketch", "Framer", "Webflow", "Jira", "Confluence", "Slack"]
    }
  ],
  projects: [
    {
      id: "proj-1",
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "AWS S3"],
      link: "https://ecommerce-demo.alexjohnson.dev",
      github: "https://github.com/alexjohnson/ecommerce-platform",
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Admin dashboard with analytics",
        "Mobile-responsive design",
        "Search and filtering capabilities"
      ],
      category: "Full Stack",
      featured: true
    },
    {
      id: "proj-2",
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      link: "https://taskmanager.alexjohnson.dev",
      github: "https://github.com/alexjohnson/task-manager",
      features: [
        "Real-time collaboration",
        "Project and task organization",
        "Team member management",
        "Progress tracking and analytics",
        "Mobile app (React Native)"
      ],
      category: "Web App",
      featured: true
    },
    {
      id: "proj-3",
      name: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive maps, and weather alerts.",
      technologies: ["Vue.js", "OpenWeather API", "Mapbox", "Chart.js", "PWA"],
      link: "https://weather.alexjohnson.dev",
      github: "https://github.com/alexjohnson/weather-dashboard",
      features: [
        "Location-based weather data",
        "Interactive weather maps",
        "7-day and hourly forecasts",
        "Weather alerts and notifications",
        "Progressive Web App (PWA)"
      ],
      category: "Frontend",
      featured: false
    },
    {
      id: "proj-4",
      name: "AI Chat Assistant",
      description: "An intelligent chat assistant powered by machine learning with natural language processing capabilities.",
      technologies: ["Python", "TensorFlow", "OpenAI API", "FastAPI", "React"],
      link: "https://ai-chat.alexjohnson.dev",
      github: "https://github.com/alexjohnson/ai-chat-assistant",
      features: [
        "Natural language processing",
        "Context-aware responses",
        "Multi-language support",
        "Real-time chat interface",
        "Machine learning model training"
      ],
      category: "AI/ML",
      featured: true
    },
    {
      id: "proj-5",
      name: "Crypto Portfolio Tracker",
      description: "A real-time cryptocurrency portfolio tracking application with advanced analytics and trading insights.",
      technologies: ["React", "TypeScript", "WebSocket", "Chart.js", "Firebase"],
      link: "https://crypto-tracker.alexjohnson.dev",
      github: "https://github.com/alexjohnson/crypto-tracker",
      features: [
        "Real-time price tracking",
        "Portfolio analytics",
        "Price alerts",
        "Trading history",
        "Mobile responsive design"
      ],
      category: "FinTech",
      featured: true
    },
    {
      id: "proj-6",
      name: "Social Media Dashboard",
      description: "A comprehensive social media management dashboard for scheduling posts and analyzing engagement.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel"],
      link: "https://social-dashboard.alexjohnson.dev",
      github: "https://github.com/alexjohnson/social-dashboard",
      features: [
        "Multi-platform posting",
        "Content calendar",
        "Analytics dashboard",
        "Team collaboration",
        "Automated scheduling"
      ],
      category: "SaaS",
      featured: false
    }
  ],
  certifications: [
    {
      id: "cert-1",
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023-03",
      credentialId: "AWS-SAA-123456",
      link: "https://aws.amazon.com/verification"
    },
    {
      id: "cert-2",
      name: "Google UX Design Certificate",
      issuer: "Google",
      date: "2022-08",
      link: "https://coursera.org/verify/UX123456"
    },
    {
      id: "cert-3",
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022-01",
      credentialId: "META-REACT-789012"
    }
  ],
  languages: [
    { name: "English", proficiency: "Native" },
    { name: "Spanish", proficiency: "Fluent" },
    { name: "French", proficiency: "Intermediate" },
    { name: "Mandarin", proficiency: "Basic" }
  ],
  about: {
    story: "I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. My journey began with a curiosity about how websites work, which led me to pursue computer science and eventually specialize in modern web technologies. I love the challenge of turning complex problems into elegant, user-friendly solutions.",
    values: [
      "User-centered design",
      "Clean, maintainable code",
      "Continuous learning",
      "Collaboration and teamwork",
      "Innovation and creativity"
    ],
    interests: [
      "Open source contributions",
      "Photography and design",
      "Hiking and outdoor adventures",
      "Coffee brewing",
      "Tech meetups and conferences"
    ]
  }
};
