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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  ecommerce,
  tripguide,
  threejs,
  web3
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Web3 Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];
const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed and maintained a custom React.js application for Starbucks' internal tools.",
      "Worked closely with the design team to create responsive and user-friendly interfaces.",
      "Optimized performance of web applications to enhance user experience.",
      "Implemented unit and integration tests to ensure code quality and reliability.",
    ],
  },

  {
    title: "Full Stack Developer",
    company_name: "ShopinMail",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Implemented a robust database architecture using MongoDB to manage large volumes of data.",
      "Developed and maintained real-time features such as live order tracking and notifications.",
      "Collaborated with the DevOps team to streamline deployment processes using CI/CD pipelines.",
      "Created detailed technical documentation to support ongoing development and maintenance.",
      "Utilized the MERN stack (MongoDB, Express.js, React.js, Node.js) to build and maintain the FoodHub website.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Architected and developed microservices to enhance the modularity and scalability of the FoodHub platform.",
      "Led a team of junior developers, providing mentorship and guidance on best practices.",
      "Integrated advanced analytics tools to track user behavior and optimize the user experience.",
      "Participated in agile ceremonies, including sprint planning, stand-ups, and retrospectives, to ensure timely delivery of features.",
    ],
  },
  {
    title: "Web3 Developer",
    company_name: "CryptoExchange",
    icon: web3,
    iconBg: "#123456",
    date: "Jan 2023 - Present",
    points: [
      "Developed and maintained APIs for fetching and managing data for various cryptocurrencies.",
      "Integrated blockchain technology to enable secure and transparent transactions.",
      "Worked with smart contracts and decentralized applications (DApps) to enhance the platform's functionality.",
      "Collaborated with cross-functional teams to ensure the scalability and security of Web3 services.",
      "Implemented features to track cryptocurrency prices and provide real-time updates to users.",
      "Conducted code reviews and ensured best practices for secure and efficient Web3 development.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but dan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like dan does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After dan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threeJs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/danieldaudu65/Car-Sales",
  },
  {
    name: "Cart Web",
    description:
      "Web application that enables users to search for products, view order and get it delivered to thheir dooorstep based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/danieldaudu65/e-commerce-porject-full-dev",
  },
  {
    name: "Trip Guide",
    description:
      "A robust backend system for an e-commerce platform that manages user accounts, processes orders, handles product inventory, and supports secure payment transactions. It also integrates with third-party services for shipping and logistics, and provides analytics and reporting tools for business insights.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/danieldaudu65/back-end-cart",
  },
];

export { services, technologies, experiences, testimonials, projects };