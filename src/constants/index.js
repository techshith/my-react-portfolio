import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import snist from "../assets/snist.jpg"
import ub from "../assets/ub-logo.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 4+ years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. As a recent graduate, I am actively seeking new opportunities to apply my skills and continue growing in the field of software development.`;

export const EXPERIENCES = [
  {
    year: "Aug 2024 - Dec 2024",
    role: "Software Developer",
    company: "ResiBrands",
    description: `Redesigned a PHP monolith into a React.js microservices architecture, optimizing API performance with Node.js and Redis, and automating CI/CD with Jenkins, Docker, and Kubernetes.`,
    technologies: ["node.js", "React.js", "Docker", "Kubernetes", ],
  },
  {
    year: "Jan 2020 - Aug 2022",
    role: "Software Engineer",
    company: "Accenture",
    description: `Developed an e-commerce website for a shopping platform using Node.js, Express.js, and MVC architecture, optimized API performance with ES6+, SASS, and async/await, and deployed microservices using Jenkins and Kubernetes, enhancing user engagement and scalability.

`,
    technologies: ["Node.js", "Express.js", "SASS", "React.js", "Jenkins","3o4ubfiwerbf" ],
  },
];

export const PROJECTS = [
  {
    title: "UB Event Scheduler",
    image: project1,
    description:
      "A scalable event scheduler with real-time data communication, efficient state management using Redux, and a responsive UI built with Next.js, Ant Design, and PostgreSQL for backend management.",
    technologies: ["Next.js", "JavaScript", "Redux", "Ant Design", "PostgreSQL", "WebSockets"],
  },
  {
    title: "Resource Manager",
    image: project2,
    description:
      "Developed a resource allocation platform using React.js, Material-UI, and MongoDB, optimizing booking efficiency and automating deployments with CI/CD pipelines.",
    technologies: ["Python","React.js", "Node.js", "Material-UI", "MongoDB", ],
  },
];


export const EDUCATION = [{
    degree: "Master of Computer Science",
    institution: "University at Buffalo",
    year: "2024",
    logo: ub
  },
  {
    degree: "Bachelor of Information Technology",
    institution: "Sreenidhi Institute of Science and Technology",
    year: "2020",
    logo: snist, 
  },
  
  
];