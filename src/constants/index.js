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
  threejs,
  mediconnect,
  metafinance,
  cancercatalyst,
  cryptchain,
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
  // {
  //   id: "resume",
  //   title: "Resume",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Innovator",
    icon: web,
  },
  {
    title: "ML Architect",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
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
    date: "August 2024 - November 2024",
    points: [
      "Developed and implemented an in-app notification system using Node.js and AWS SNS for real-time alerts, deployed on AWS EC2, enabling users to receive updates instantly within the app",
      "Contributed to the development of chat and authentication APIs using Express.js and JWT, enhancing security protocols and improving API efficiency, which reduced authentication errors by 10% and boosted response times by 15%",
      "Implemented a scalable CRUD Trip Information Service using Express.js and MongoDB, enabling efficient management of trip data and reducing data management errors by 10%",
    ],
  },
  {
    title: "Technical Lead",
    company_name: "Google Developer Student Clubs",
    icon: gdsc,
    iconBg: "white",
    date: "October 2022 - Present",
    points: [
      "Led interactive workshops on JavaScript, Python, Firebase, and GitHub, resulting in 90% participation from GDSC members and enhanced technical skills for the team",
      "Mentored 15 team members through structured, hands-on coding sessions in JavaScript and Python, resulting in a 30% increase in proficiency in these languages programming languages, leading to improved project efficiency and quality",
      "Organized and executed coding competitions and hackathons, cultivating a collaborative environment that encouraged practical problem-solving skills among participants"
    ],
  },
];

const projects = [
  {
    name: "CryptChain",
    description:
      "A decentralized Web 3.0 Ethereum transaction portal with real-time blockchain integration, secure MetaMask wallet connections, and transparent transaction tracking via Etherscan",
    tags: [
      {
        name: "web3",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "ethers.js",
        color: "pink-text-gradient",
      },
    ],
    image: cryptchain,
    source_code_link: "https://github.com/",
  },
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
    name: "MetaFinance",
    description:
      "A real-time financial dashboard integrating multi-bank accounts, secure fund transfers, and spending insights for seamless financial management",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "plaidsdk",
        color: "green-text-gradient",
      },
      {
        name: "dwolla",
        color: "pink-text-gradient",
      },
    ],
    image: metafinance,
    source_code_link: "https://github.com/",
  },
  {
    name: "CancerCatalyst",
    description:
      "An AI-powered cancer care platform offering personalized treatment plans, real-time diagnostic tools, and a user-friendly dashboard for efficient patient management",
    tags: [
      {
        name: "geminiai",
        color: "blue-text-gradient",
      },
      {
        name: "rpostgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: cancercatalyst,
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
