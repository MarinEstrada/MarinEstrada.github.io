import {
  Barbell_1,
  Blogging,
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo4,
  Coursera,
  DiamondLgBlue,
  DiamondLgGreen,
  DiamondLgOrange,
  DiamondLgPink,
  DiamondLgYellow,
  Gaming,
  Github_circleBlue,
  Github_circle1,
  Github_block,
  Google,
  Haskell_icon,
  Letter_c,
  Linkedin,
  Linux,
  Python,
  React_icon,
  Reading,
  Scala_icon,
  SkillCss,
  SkillFigma,
  SkillHtml5,
  SkillPhotoshop,
  SkillSketch,
  SkillTrello,
  SkillWireframe,
  SkillXd,
  SQL_icon,
  Terminal,
  Travelling,
  Treadmill,
  Udemy,
  JS_icon,
} from "../assets/image";

const DATA = {
  professionalExperiences: [

  ],
  educationalExperiences: [
    {
      id: "edu_d1",
      icon: DiamondLgYellow,
      course: "Computing Science",
      institution: "Simon Fraser University",
      degree: "Bachelor of Science",
      startDate: "2021",
      endDate: "",
    },
    {
      id: "edu_1",
      icon: DiamondLgBlue,
      course: "Embedded Systems",
      institution: "Simon Fraser University",
      degree: "Upper Division Course",
      startDate: "Spring 2024",
      endDate: "",
    },
    {
      id: "edu_2",
      icon: DiamondLgGreen,
      course: "Special Topics in Artificial Intelligence",
      institution: "Simon Fraser University",
      degree: "Upper Division Course",
      startDate: "Spring 2024",
      endDate: "",
    },
    {
      id: "edu_3",
      icon: DiamondLgOrange,
      course: "Computational Data Science",
      institution: "Simon Fraser University",
      degree: "Upper Division Course",
      startDate: "Fall 2023",
      endDate: "",
    },
    {
      id: "edu_4",
      icon: DiamondLgPink,
      course: "Programming Languages",
      institution: "Simon Fraser University",
      degree: "Upper Division Course",
      startDate: "Summer 2023",
      endDate: "",
    },
    {
      id: "edu_5",
      icon: DiamondLgYellow,
      course: "Networking I",
      institution: "Simon Fraser University",
      degree: "Upper Division Course",
      startDate: "Summer 2023",
      endDate: "",
    },
    {
      id: "edu_6",
      icon: DiamondLgBlue,
      course: "Data Structures & Algorithms",
      institution: "Simon Fraser University",
      degree: "Upper Division Course",
      startDate: "Summer 2023",
      endDate: "",
    },
    {
      id: "edu_7",
      icon: DiamondLgGreen,
      course: "Operating Systems",
      institution: "Simon Fraser University",
      degree: "Upper Division Course",
      startDate: "Spring 2023",
      endDate: "",
    },
    {
      id: "edu_8",
      icon: DiamondLgOrange,
      course: "Numerical Analysis I",
      institution: "Simon Fraser University",
      degree: "Upper Division Course",
      startDate: "Fall 2022",
      endDate: "",
    },
    {
      id: "edu_9",
      icon: DiamondLgPink,
      course: "Computational Linguistics",
      institution: "Simon Fraser University",
      degree: "Upper Division Course",
      startDate: "Fall 2022",
      endDate: "",
    },
    {
      id: "edu_10",
      icon: DiamondLgYellow,
      course: "Intoduction to Artificial Intelligence",
      institution: "Simon Fraser University",
      degree: "Upper Division Course",
      startDate: "Fall 2022",
      endDate: "",
    },
    {
      id: "edu_11",
      icon: DiamondLgBlue,
      course: "Database Systems I",
      institution: "Simon Fraser University",
      degree: "Upper Division Course",
      startDate: "Summer 2022",
      endDate: "",
    },
    {
      id: "edu_d2",
      icon: DiamondLgGreen,
      course: "Applied Linguistics",
      institution: "University of Saskatchewan",
      degree: "Bachelor of Arts",
      startDate: "2013",
      endDate: "2019",
    },
    {
      id: "edu_d3",
      icon: DiamondLgOrange,
      course: "French",
      institution: "University of Saskatchewan",
      degree: "Bachelor of Arts",
      startDate: "2013",
      endDate: "2019",
    },
  ],
  skills: [
    {
      id:"skill_1",
      icon: Github_circleBlue,
      name: "Git & GitHub",
      description: "Version Control System",
    },
    {
      id: "skill_2",
      icon: Terminal,
      name: "Unix Shell",
      description: "ssh, scp, vi/vim/nano, grep, sed",
    },
    {
      id: "skill_3",
      icon: Linux,
      name: "Linux",
      description: "Ubuntu & Debian Distributions",
    },
    {
      id: "skill_4",
      icon: React_icon,
      name: "React",
      description: "React with Node Project Manager"
    },
    {
      id: "skill_5",
      icon: SQL_icon,
      name: "SQL",
      description: "Relational Databases: MySQL, PostgreSQL"
    },
    {
      id: "skill_l1",
      icon: Python,
      name: "Python",
      description: "3.8, 3.9, 3.10, 3.11",
    },
    {
      id: "skill_l2",
      icon: Letter_c,
      name: "C",
      description: "C99, C11, C17",
    },
    {
      id: "skill_l3",
      icon: JS_icon,
      name: "JavaScript",
      description: "ES6"
    },
    {
      id: "skill_l4",
      icon: Haskell_icon,
      name: "Haskell",
      description: "GHC 8.8.4",
    },
    {
      id: "skill_l5",
      icon: Scala_icon,
      name: "Scala",
      description: "3.3.0"
    },
    {
      id: "skill_x0",
      icon: SkillHtml5,
      name: "HTML5",
      description: "Hypertext Markup",
    },
    {
      id: "skill_x1",
      icon: SkillCss,
      name: "CSS",
      description: "Attractive Design & Frameworks",
    },
  ],
  certificatesAndAwards: [
    {
      id: "cert_award_1",
      icon: Linkedin,
      provider: "LinkedIn",
      course: "DevOps Institute Cert Prep: SRE Foundation (SRE)",
      startDate: "July 2024",
      endDate: "July 2024",
    },
  ],
  hobbiesAndInterests: [
    {
      id: "hob_1",
      icon: Treadmill,
      name: "Exercising",
    },
    {
      id: "hob_2",
      icon: Gaming,
      name: "Gaming",
    },
    {
      id: "hob_3",
      icon: Reading,
      name: "Reading",
    },
    {
      id: "hob_4",
      icon: Travelling,
      name: "Travelling",
    },
  ],
};

export default DATA;
