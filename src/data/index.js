import {
  studyg,
  cr,
  dd,
  gs
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id : "tools",
    title: "Tools"
  },
  
  {
    id : "links",
    title : "Links"
  },

  {
    id: "contact",
    title: "Contact",
  },

];

const links = [
  {
    title : "Github",
    link : "https://github.com/kaifkh20"
  },
  {
    title : "Codeforces",
    link : "https://codeforces.com/profile/kaifkhan./"
  },
  {
    title : "GeeksForGeeks",
    link:"https://www.geeksforgeeks.org/user/kaiffkhu449/"
  },
  // {
  //   title : "Resume",
  //   link : "https://drive.google.com/file/d/10Ldx3bT5kfu4uzkquFPyDd98DO4_0OMT/"
  // }
]

const experiences = [
  {
    title: "Web Development",
    // company_name: "Self Employed",
    date: "2020 - Present",
    details: [
      ["<span style='color:white;'>Nodejs</span>", "Bunjs, Django, Flask, React, GitHub, GitLab, Bitbucket, Chrome DevTools, Bootstrap, Tailwind CSS,etc."]
    ],
  },
  {
    title: "Systems Programming",
    // company_name: "Self Employed",
    date: "2022 - Present",
    details: [
      ["<span style='color:white;'>C</span>", "ASM, Linux, UNIX, C++, Rust, Computer Architecture,etc ."]
    ],
  },
  // {
  //   title : "Databases",
  //   date : "2020 - Present",
  //   details : [
  //       "Postgres,MySQL, SQlite, MongoDB, etc." 
  //   ]
  // }
  // {
  //   title: "Computer Science",
  //   company_name: "ODU",
  //   date: "2015 - 2018",
  //   details: [
  //     "Built a <span style='color: white;'>computer science foundation</span> learning theory, computer architecture, and software engineering.",
  //     "Worked and interned at <span style='color: white;'>NASA and Norfolk Southern Railway</span> to gain practical experience in the field of data analysis.",
  //     "Acted as a member of the <span style='color: white;'>Association for Computing Machinery</span> (ACM).",
  //   ],
  // },
];

const portfolio = [
  {
    name : "Study Buddy",
    description:
    "Study Buddy is a web application built using Node.js, EJS, and Express, MongoDB, etc. providing a platform for university students to communicate with each other and also engage in a global chat with other users. The application is powered by Socket.IO to enable real-time communication in the chat feature."
    ,image:studyg
  },
  {
    name: "Code Runner",
    description:"This project is a web application for submitting, storing, and executing code snippets. It utilizes Aiven MySQL for data persistence and Judge0 API for online code evaluation. Frontend is made up of ReactJS",
    image:cr
  },
  {
    name : "Disco Data",
    description : "A Lightweight and Versatile Redis in Python. It offers essential functionalities for managing key-value pairs with persistence, expiry, and replica support."
    ,image:dd
  },
  {
    name : "Green Safar",
    description : "GreenSafar: Your Gateway to Biodiversity Exploration. ",
    image:gs
  }

];

export {  portfolio,experiences,links };

