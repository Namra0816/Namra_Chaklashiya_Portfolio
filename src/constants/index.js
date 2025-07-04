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
  // exercisefusion,
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
      "Built a real-time in-app notification system using Node.js and AWS SNS, deployed on EC2, delivering instant trip alerts",
      "Developed secure chat and authentication APIs with Express.js and JWT, reducing authorization errors by 10% and improving API response times by 15% across multiple endpoints",
      "Designed a scalable trip management API using Express.js and MongoDB, enabling efficient real-time CRUD operations while reducing data errors by 10% during high-traffic usage",
    ],
  },
  {
    title: "Technical Lead",
    company_name: "Google Developer Student Clubs",
    icon: gdsc,
    iconBg: "white",
    date: "October 2022 - Present",
    points: [
      "Mentored 15 team members through structured, hands-on coding sessions in JavaScript and Python, resulting in a 30% increase in programming proficiency and delivering 7+ end-to-end projects",
      "Led interactive workshops on GitHub, Firebase, and LinkedIn, resulting in 90% participation from GDSC members and enhanced technical skills for the team",
      "Organized coding competitions and hackathons, creating a culture of collaboration and problem-solving among 40+ student developers to give them a taste of real-world challenges and team dynamics"
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
  // {
  //   name: "Exercise Fusion",
  //   description:
  //   "ExerciseFusion is a fitness app for exploring exercises by category and muscle group, with real-time data integration via RapidAPI",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "html/css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: exercisefusion,
  //   source_code_link: "https://github.com/",
  // },
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
