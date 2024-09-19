import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  dayoff,
  gdsc,
  cifs,
  threejs,
  mediconnect,
  exercisefusion,
  slms,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Diving into Data Science",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "DayOff",
    icon: dayoff,
    iconBg: "#513cc9",
    date: "June 2024 - Present",
    points: [
      "Developed and implemented an in-app notification system, allowing users to easily check updates within the app.",
      "Contributed to the development of chat APIs and authentication APIs, enhancing security and efficiency, which reduced authentication errors by 10% and improved overall API response times by 15%.",
      "Implemented a CRUD Trip Information Service to manage trip data, providing reliable and scalable operations for interacting with the trips database, reducing data management errors by 10%.",
    ],
  },
  {
    title: "Technical Lead",
    company_name: "Google Developer Student Clubs",
    icon: gdsc,
    iconBg: "white",
    date: "October 2022 - May 2024",
    points: [
      "Led interactive workshops on JavaScript, Python, Firebase, and GitHub, resulting in 90% participation from GDSC members and enhanced technical skills for the team.",
      "Mentored and guided 15 team members through hands-on coding sessions, resulting in a 30% increase in proficiency in key programming languages and tools, leading to improved project efficiency and quality.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "CIFS Code",
    icon: cifs,
    iconBg: "white",
    date: "Feb 2021 - Aug 2022",
    points: [
      "Successfully drove a 25% surge in user engagement and improved user experience through the strategic application of web development frameworks like React and Vue.js.",
      "Utilized MySQL and MongoDB to implement and manage databases, resulting in a 20% increase in data retrieval efficiency for captivating web applications, ultimately improving website responsiveness and user engagement.",
      "Improved web application performance by 15% through optimizing Node.js and React code, resulting in faster page load times and increased user satisfaction.",
    ],
  },
];

const projects = [
  {
    name: "MediConnect",
    description:
      "A healthcare patient management application for streamlined patient registration, appointment booking, and medical record management",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: mediconnect,
    source_code_link: "https://github.com/",
  },
  {
    name: "Exercise Fusion",
    description:
    "ExerciseFusion is a fitness app for exploring exercises by category and muscle group, with real-time data integration via RapidAPI",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
    ],
    image: exercisefusion,
    source_code_link: "https://github.com/",
  },
  {
    name: "Staff Leave Management System",
    description:
    "Staff Leave Management System is a solution to efficiently handle staff leave, department operations, tasks, and attendance",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      
    ],
    image: slms,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
