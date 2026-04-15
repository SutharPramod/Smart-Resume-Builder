export const sampleData = {
  personal: {
    name: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91-9876-543-210",
    address: "Mumbai, Maharashtra, India",
  },
  social: {
    github: "rahul-sharma",
    linkedin: "rahul-sharma-dev",
    twitter: "@rahul_dev_pro",
    website: "rahuldeveloper.com",
  },
  summary:
    "Results-driven Full Stack Developer with 6+ years of experience building scalable web applications and leading development teams. Expertise in React, Node.js, and AWS. Passionate about writing clean code and mentoring junior developers. Proven track record of delivering projects on time with 99.9% uptime.",
  education: [
    {
      degree: "Bachelor of Engineering (BE) - Computer Science",
      school: "Indian Institute of Technology (IIT) Bombay",
      institute: "IIT Bombay",
      startDate: "2016",
      endDate: "2020",
      graduationYear: "2020",
    },
    {
      degree: "Class XII (Senior Secondary)",
      school: "Delhi Public School, Mumbai",
      institute: "Delhi Public School",
      startDate: "2014",
      endDate: "2016",
      graduationYear: "2016",
    },
  ],
  experience: [
    {
      position: "Senior Full Stack Developer",
      company: "TechCorp Solutions Pvt. Ltd.",
      description:
        "Led a team of 5 developers in building enterprise-level applications. Architected microservices using Node.js and managed deployment on AWS.",
      startDate: "Jan 2022",
      endDate: "Present",
    },
    {
      position: "Full Stack Developer",
      company: "InnovateTech India",
      description:
        "Developed and maintained RESTful APIs using Node.js and Express. Built responsive UI components using React. Implemented CI/CD pipelines using Docker and Jenkins.",
      startDate: "Jun 2020",
      endDate: "Dec 2021",
    },
    {
      position: "Junior Developer",
      company: "WebApps Studio",
      description:
        "Worked on frontend development using vanilla JavaScript and jQuery. Assisted in database design and optimization for SQL Server.",
      startDate: "Jan 2018",
      endDate: "May 2020",
    },
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with real-time inventory management and payment integration. Handles 50K+ daily transactions.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API", "Express"],
      startDate: "Mar 2023",
      endDate: "Dec 2023",
    },
    {
      name: "Project Management Dashboard",
      description:
        "Collaborative project management tool with real-time updates using WebSockets. Features include task assignment, progress tracking, and team analytics.",
      techStack: [
        "React",
        "Node.js",
        "PostgreSQL",
        "WebSockets",
        "Tailwind CSS",
      ],
      startDate: "Jul 2022",
      endDate: "Nov 2022",
    },
    {
      name: "AI Chat Application",
      description:
        "Real-time chat application with AI-powered recommendations. Integrated with OpenAI API for intelligent responses.",
      techStack: ["React", "Socket.io", "Python", "Flask", "OpenAI API"],
      startDate: "Jan 2023",
      endDate: "Jun 2023",
    },
  ],
  technicalSkills:
    "JavaScript, TypeScript, React, Next.js, Node.js, Express, Python, MongoDB, PostgreSQL, MySQL, AWS, Docker, Kubernetes, Git, Jenkins, GraphQL, REST APIs, Webpack, Redux, Material-UI, Tailwind CSS",
  softSkills:
    "Team Leadership, Project Management, Problem Solving, Communication, Mentoring, Agile/Scrum, Critical Thinking, Time Management, Collaboration, Presentation Skills",
  languages:
    "English (Professional), Hindi (Native), Marathi (Fluent), French (Basic)",
  certifications: [
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2022",
    },
    {
      name: "Kubernetes Application Developer (CKAD)",
      issuer: "Linux Foundation",
      date: "2023",
    },
  ],
};

export const initialData = {
  personal: { name: "", email: "", phone: "", address: "" },
  social: { github: "", linkedin: "", twitter: "", website: "" },
  summary: "",
  education: [],
  experience: [],
  projects: [],
  technicalSkills: "",
  softSkills: "",
  languages: "",
  certifications: [],
};
