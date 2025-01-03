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
  Question_mark,
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
  French,
  Linguistics,
  ComputerScience,
  Cplusplus
} from "../assets/image";

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_1",
      startDate: "May 2024",
      endDate: "",
      position: "A.I. Prompt Engineer & Training Specialist",
      diamondColors: ["Yellow", "Green", "Blue"],
      company: {
        logo: Question_mark,
        name: "DataAnnotation",
        info: "Data Annotation Company for training AI models",
      },
      description: "Test A.I. models by creating coding prompts and testing outputs and label outputs to reinforce desired outputs with a focus on accuracy and safety. I specifically tested coding prompts, testing the models ability to create and work with NumPy and Pandas dataframes. I also trained models using multiple programming languages including Python, C, and JavaScript.",
      links: [
        {
          label: "DataAnnotation",
          url: "https://www.dataannotation.tech/"
        }
        ],
    },
  ],
  projects: [
    {
      id: "proj_1",
      startDate: "Aug 2024",
      endDate: "",
      icon: Question_mark,
      title: "Personal CV Website",
      subTitle: "React, JavaScript, SCSS",
      url: "https://github.com/MarinEstrada/MarinEstrada.github.io",
      diamondColors: ["Yellow", "Blue", "Green"],
      description: [
        "Developed this personal CV website using React, JavaScript, and SCSS leveraging reusable components to effectively showcases skills, projects, and professional experience",
        "Utilized Vite as a development server for efficient local development, enabling continuous builds and module replacement",
        "Automated the deployment of the website onto GitHub Pages using GitHub Actions for continuous integration and delivery",
      ],
    },
    {
      id: "proj_2",
      startDate: "Nov 2024",
      endDate: "Dec 2024",
      icon: Question_mark,
      title: "Concurrent Knapsack Problem",
      subTitle: "Parallelizing a Serial Algorithm with threads and MPI",
      url: "https://github.com/MarinEstrada/Concurrent-Knapsack-Problem",
      diamondColors: ["Pink", "Green", "Yellow"],
      description: [
        "Parallelized the Knapsack problem with MPI and threads using C++ on WSL and Ubuntu distributions",
        "Increased throughput by 2.85 times using MPI, and by 4.78 times using threads.",
        "Divided calculations for sub-problems between processes and used MPI_Allgatherv to synchronize communication between processes in preparation for analyzing next item to put in knapsack during MPI implementation",
        "Evaluated performance by comparing speedup and scalability across serial,  MPI,and threaded implementations on a Linux cluster: the Slurm Workload Manager",
      ],
    },
    {
      id: "proj_3",
      startDate: "Feb 2024",
      endDate: "April 2024",
      icon: Question_mark,
      title: "Plant Moniroring System",
      subTitle: "An Embedded System Project",
      url: "",
      diamondColors: ["Green", "Orange", "Pink"],
      description: [
        "Developed on  Linux Debian distribution to cross-compile C code as well as debug on a BeagleBone-Green running an ARM-Linux architecture to monitor plant health",
        "Used C programming language to develop the system to track sensor data",
        "Calibrated sensors to accurately read soil moisture, ambient temperature, and light levels using PWM to monitor our plant and provide shade using an automated umbrella powered by a motor (also through PWM)",
        "Used PRU to visually indicate plant status on a neopixel light strip, as well as UDP to communicate plant status on a website we developed using Node.js",
        "Attached motors to water the plan and provide shade when necessary",
      ],
    },
    {
      id: "proj_4",
      startDate: "Nov 2023",
      endDate: "Dec 2023",
      icon: Question_mark,
      title: "Rap Music Analysis",
      subTitle: "Examining claims that rap music has become more simplistic",
      url: "https://github.com/MarinEstrada/rap_music_analysis/",
      diamondColors: ["Pink", "Yellow", "Blue"],
      description: [
        "Built ETL Pipelines to clean, analyze, and visualize large amounts of raw data using Python (pandas, NumPy) and SQL to identify trends in rap music over time",
        `Suplimented data using Spotify's API, extracting song Data based on artist and track names`,
        "Processed Data for sentiment Analysis using NLTK's VADER and various machine learning models",
        "Uncovered trends in rap music's wpm, lexical density, unique wpm, and lexical diversity over time",
        "Extracted insights from data using statistical analysis to support claims of rap music becoming simplistic over time",
      ],
    },
    // {
    //   id: "proj_5",
    //   startDate: "Aug 2023",
    //   endDate: "Aug 2023",
    //   icon: Question_mark,
    //   title: "Sentiment Analysis Project",
    //   subTitle: "Exploring sentiment analysis through Python",
    //   url: "https://www.kaggle.com/marinestrada/python-sentiment-analysis-project/",
    //   diamondColors: ["Orange", "Green", "Yellow"],
    //   description: [
    //     "Explored use of NLTK's VADER as well as Hugging face's transformers library for sentiment analysis",
    //   ],
    // },
    {
      id: "proj_6",
      startDate: "July 2023",
      endDate: "July 2023",
      icon: Question_mark,
      title: "Divide and Conquer",
      subTitle: "A client-server network for two players",
      url: "https://github.com/MarinEstrada/cmpt371_Divide_and_Conquer/",
      diamondColors: ["Blue", "Pink", "Orange"],
      description: [
        "Led a team to implement a multiplayer client-server game called 'Divide and Conquer'",
        "Implemented using Java and Java Swing, employing the TCP protocol for real-time, synchronized gameplay between users",
        "Used socket programming to establish and manage client-server connections, ensuring reliable communication and data exchange between the players",
      ],
    },
    {
      id: "proj_7",
      startDate: "July 2022",
      endDate: "August 2022",
      icon: Question_mark,
      title: "Miracle-Buddy",
      subTitle: "Resource management app using SQL",
      url: "https://github.com/michvong/miracle-buddy",
      diamondColors: ["Yellow", "Pink", "Blue"],
      description: [
        "Designed and implemented a robust relational database schema using MySQL, ensuring efficient data organization and optimal query performance",
        "Developed a dynamic user-friendly interface utilizing React for efficient component-based UI development, Node.js for backend integration, and Tailwind CSS for rapid styling and responsive design.",
        "Implemented a comprehensive set of RESTful API endpoints to facilitate CRUD (Create, Read, Update, Delete) operations on the MySQL database",
      ],
    },
    {
      id: "proj_8",
      startDate: "June 2021",
      endDate: "June 2021",
      icon: Question_mark,
      title: "My Reads",
      subTitle: "A book tracking app",
      url: "https://github.com/MarinEstrada/reactnd-project-myreads/",
      diamondColors: ["Yellow", "Green", "Blue"],
      description: [
        "Built a dynamic book tracking application using React and React Router, enabling users to seamlessly navigate between different views and track their reading progress",
        "Leveraged Docker containers to ensure consistent development environments across multiple operating systems",
        "Integrated the app with a Node.js API to access a comprehensive book dataset, utilizing React’s efficient state management to ensure responsive user interactions",
      ],
    },
  ],
  educationalExperiences: [
    {
      id: "edu_d1",
      icon: ComputerScience,
      course: "Computer Science",
      institution: "Simon Fraser University",
      degree: "Bachelor of Science",
      startDate: "Sept 2021",
      endDate: "Dec 2024",
      convocationDate: "June 2025",
    },
    {
      id: "edu_d2",
      icon: Linguistics,
      course: "Applied Linguistics",
      institution: "University of Saskatchewan",
      degree: "Bachelor of Arts",
      minor: "Computer Science",
      startDate: "2013",
      endDate: "2019",
      convocationDate: "",
    },
    {
      id: "edu_d3",
      icon: French,
      course: "French",
      institution: "University of Saskatchewan",
      degree: "Bachelor of Arts",
      startDate: "2013",
      endDate: "2019",
      convocationDate: "",
    },
  ],
  courseExperiences: [
    {
      id: "edu_1",
      icon: DiamondLgBlue,
      course: "Distributed Systems",
      institution: "Simon Fraser University",
      courseType: "Upper Division Course",
      startDate: "Fall 2024",
      endDate: "Fall 2024",
    },
    {
      id: "edu_2",
      icon: DiamondLgGreen,
      course: "Database Systems II",
      institution: "Simon Fraser University",
      courseType: "Upper Division Course",
      startDate: "Fall 2024",
      endDate: "Fall 2024",
    },
    {
      id: "edu_3",
      icon: DiamondLgOrange,
      course: "Embedded Systems",
      institution: "Simon Fraser University",
      courseType: "Upper Division Course",
      startDate: "Spring 2024",
      endDate: "Spring 2024",
    },
    {
      id: "edu_4",
      icon: DiamondLgPink,
      course: "Special Topics in Artificial Intelligence",
      institution: "Simon Fraser University",
      courseType: "Upper Division Course",
      startDate: "Spring 2024",
      endDate: "Spring 2024",
    },
    {
      id: "edu_5",
      icon: DiamondLgYellow,
      course: "Computational Data Science",
      institution: "Simon Fraser University",
      courseType: "Upper Division Course",
      startDate: "Fall 2023",
      endDate: "Fall 2023",
    },
    {
      id: "edu_6",
      icon: DiamondLgBlue,
      course: "Programming Languages",
      institution: "Simon Fraser University",
      courseType: "Upper Division Course",
      startDate: "Summer 2023",
      endDate: "Summer 2023",
    },
    {
      id: "edu_7",
      icon: DiamondLgGreen,
      course: "Networking I",
      institution: "Simon Fraser University",
      courseType: "Upper Division Course",
      startDate: "Summer 2023",
      endDate: "Summer 2023",
    },
    {
      id: "edu_8",
      icon: DiamondLgOrange,
      course: "Data Structures & Algorithms",
      institution: "Simon Fraser University",
      courseType: "Upper Division Course",
      startDate: "Summer 2023",
      endDate: "Summer 2023",
    },
    {
      id: "edu_9",
      icon: DiamondLgPink,
      course: "Operating Systems",
      institution: "Simon Fraser University",
      courseType: "Upper Division Course",
      startDate: "Spring 2023",
      endDate: "Spring 2023",
    },
    {
      id: "edu_10",
      icon: DiamondLgYellow,
      course: "Numerical Analysis I",
      institution: "Simon Fraser University",
      courseType: "Upper Division Course",
      startDate: "Fall 2022",
      endDate: "Fall 2022",
    },
    {
      id: "edu_9",
      icon: DiamondLgBlue,
      course: "Computational Linguistics",
      institution: "Simon Fraser University",
      courseType: "Upper Division Course",
      startDate: "Fall 2022",
      endDate: "Fall 2022",
    },
    {
      id: "edu_12",
      icon: DiamondLgGreen,
      course: "Intoduction to Artificial Intelligence",
      institution: "Simon Fraser University",
      courseType: "Upper Division Course",
      startDate: "Fall 2022",
      endDate: "Fall 2022",
    },
    {
      id: "edu_13",
      icon: DiamondLgOrange,
      course: "Database Systems I",
      institution: "Simon Fraser University",
      courseType: "Upper Division Course",
      startDate: "Summer 2022",
      endDate: "Summer 2022",
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
      icon: Cplusplus,
      name: "C/C++",
      description: "C99, C11, C17",
      description2: "C++11, C++14, C++17",
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
