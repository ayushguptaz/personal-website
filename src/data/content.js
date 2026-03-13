export const data = {
  name: "Ayush Gupta",
  photo: import.meta.env.BASE_URL + "photo.jpg",
  social: {
    github: "https://github.com/ayushguptaz",
    linkedin: "https://linkedin.com/in/ayush-gupta-iitd",
    youtube: "https://www.youtube.com/@ayushguptazz",
    instagram: "https://www.instagram.com/ayu.shguptaz/",
    email: "mailto:ayushguptaiitd00@gmail.com",
  },

  stats: [],

  currently: {
    updatedAt: "Feb 2026",
    role: "Software Engineer, R&D",
    company: "Cadence Design Systems",
    items: [
      "Working on FPGA Prototyping Systems at Cadence — bridging RTL design and hardware validation",
      "Designing wildcard instance matching for large design hierarchies using Tries",
      "Engineering resource pre-estimation modules for independent design components",
      "Deep in Unix daily — Perforce, gmake, LSF, and debuggers for build automation",
      "Grinding competitive programming — targeting Candidate Master on Codeforces",
    ],
  },

  experience: [
    {
      company: "Cadence Design Systems",
      role: "Software Engineer, R&D Team",
      period: "June 2025 — Present",
      location: "India",
      logo: import.meta.env.BASE_URL + "cadence-logo.svg",
      bullets: [
        "Working on FPGA Prototyping Systems — enabling RTL-to-FPGA hardware validation workflows for chip designers",
        "Designed wildcard instance matching feature for Instances across large design hierarchies using Tries data structure",
        "Engineered a module for pre-estimation of resources in independent design components, improving resource utilization",
        "Working in Unix-based environment using Perforce, gmake, LSF, and debuggers for build automation and tuning",
      ],
      tags: ["C++", "FPGA", "Tries", "EDA", "Unix", "Perforce"],
    },
    {
      company: "Smart Antenna Lab, Swansea University",
      role: "Research Intern",
      period: "May 2024 — July 2024",
      location: "Swansea, United Kingdom",
      logo: null,
      bullets: [
        "Developed a software framework for drone detection on Raspberry Pi OS using PyQt and Tkinter",
        "Implemented SPI-based drivers for beamforming chips and Python's socket library to manage multiple hardware",
        "GUI supports real-time updates & synchronization with hardware via periodic data fetching and display",
        "Enhanced reliability with structured exception handling and edge-case simulation frameworks",
        "Results on Multibeam & Multinull formation and Antenna design presented at IEEE APS 2024",
      ],
      tags: ["Python", "PyQt", "Raspberry Pi", "SPI", "Embedded", "IEEE APS 2024"],
    },
  ],

  projects: [
    {
      title: "Natural Language Q&A and Document Search",
      description:
        "Search engine using KMP and Boyer-Moore algorithms for fast string matching across large text corpora. Ranked top-K paragraphs with TF-IDF and Porter Stemming, integrated OpenAI API for context-aware Q&A responses.",
      tags: ["Python", "NLP", "KMP", "Boyer-Moore", "TF-IDF", "OpenAI API", "Trie"],
      year: "Nov–Dec 2024",
      supervisor: "Prof. Rahul Narain, IIT Delhi",
    },
    {
      title: "Object Count Prediction using Neural Networks",
      description:
        "Feedforward neural network built from scratch in Python to predict object counts (1–5) from CLEVR images. Implemented mini-batch SGD and backpropagation, achieving 88% test accuracy over 10,000 training samples.",
      tags: ["Python", "Neural Networks", "SGD", "Backpropagation", "NumPy"],
      year: "Jan–Feb 2025",
      supervisor: "Prof. Sandeep Kumar, IIT Delhi",
    },
    {
      title: "Predictive Analytics of Stock Prices with News Sentiment",
      description:
        "SVR model with RBF kernel for stock price prediction, incorporating sentiment analysis from news articles. Used yfinance for historical data, TextBlob for polarity scoring, generated 30-day future predictions evaluated with MAE.",
      tags: ["Python", "SVR", "scikit-learn", "NLP", "yfinance", "TextBlob"],
      year: "Jul–Oct 2023",
      supervisor: "Prof. Brejesh Lall, IIT Delhi",
      link: "https://github.com/ayushguptaz/Predictive-Analytics-of-Stock-Prices-with-News-Sentiment",
    },
    {
      title: "Nearby Restaurants Search (Google Maps Feature)",
      description:
        "Search algorithm to find all points within a given Chebyshev distance using a 2D Range Tree. Achieves O(n log n) build time and O(m + (log n)²) query time for spatial restaurant lookup.",
      tags: ["Python", "Data Structures", "2D Range Tree", "Spatial Search"],
      year: "Jul–Oct 2023",
      supervisor: "Prof. Naveen Garg, IIT Delhi",
      link: "https://github.com/ayushguptaz/Nearby-Restaurants-Search-Implementation",
    },
    {
      title: "SimpleRISC CPU Architecture",
      description:
        "Designed a 5-unit RISC CPU in Logisim Evolution with a custom ISA — 32-bit instructions, 16 general-purpose registers, full arithmetic, comparison (with flags), and memory operations.",
      tags: ["VHDL", "Logisim", "Computer Architecture", "ISA Design"],
      year: "Mar–Apr 2023",
      supervisor: "Prof. Saurav Gandhi, IIT Delhi",
      link: "https://github.com/ayushguptaz/SimpleRISC-CPU-Architecture-Design-Using-Logisim-Evolution",
    },
    {
      title: "AI Rollerball Game Bot",
      description:
        "Intelligent game-playing agent for the Rollerball board game implemented in C++. Uses adversarial search with alpha-beta pruning and custom heuristics to play competitively.",
      tags: ["C++", "AI", "Alpha-Beta Pruning", "Game Theory"],
      year: "2024",
      link: "https://github.com/ayushguptaz/AI-Powered-Rollerball-Game-Bot",
    },
    {
      title: "Compiler & Evaluator for E-Language",
      description:
        "A compiler and evaluator for a custom expression language with optimised arithmetic. Implements lexer, parser, AST, and evaluator with operator precedence and constant folding.",
      tags: ["C++", "Compilers", "AST", "Lexer", "Parser"],
      year: "2024",
      link: "https://github.com/ayushguptaz/Compiler-and-Evaluator-for-E-Language-with-Optimised-Arithmetic",
    },
    {
      title: "Full-Stack Finance Tracker",
      description:
        "MERN stack personal finance application with transaction tracking, category-based analytics, and monthly budget visualizations. Features JWT auth and a responsive dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "MERN"],
      year: "2025",
      link: "https://github.com/ayushguptaz/Finance-Tracker-",
    },
  ],

  wins: [
    {
      year: "2025",
      title: "Software Engineer @ Cadence Design Systems",
      description:
        "Joined the R&D team at Cadence, one of the world's leading EDA companies. Working on tools that power semiconductor chip design at global scale.",
    },
    {
      year: "2024",
      title: "IEEE APS 2024 — Research Presentation",
      description:
        "Experimental results on Multibeam & Multinull antenna formation, developed during internship at Smart Antenna Lab, Swansea University, were presented at IEEE APS 2024.",
    },
    {
      year: "2022",
      title: "Top 5% Merit Branch Change — IIT Delhi",
      description:
        "Changed discipline to Electrical Engineering on merit basis — ranked in top 5% out of 1,200 students across all departments. One of the most competitive processes at IIT Delhi.",
    },
    {
      year: "2022",
      title: "1st Rank — Decipher-D-Cipher, Tryst IIT Delhi",
      description:
        "Won the cryptography & ciphers event at Tryst, IIT Delhi's annual technical festival, organized by the Mathematics Society.",
    },
    {
      year: "2017",
      title: "State Child Scientist — NCSC 2017",
      description:
        "Selected to participate in the 25th State Level National Science Congress — one of the earliest sparks of curiosity about how things work.",
    },
  ],

  education: [
    {
      institution: "Indian Institute of Technology, Delhi",
      degree: "B.Tech in Electrical Engineering",
      year: "2021 — 2025",
      grade: "CGPA: 7.73 / 10",
      logo: import.meta.env.BASE_URL + "iitd-logo.svg",
      note: "Departmental Convenor at CAIC. Core coursework in DSA, OS, Computer Architecture, Signal Processing, Control Engineering, and Machine Learning.",
    },
    {
      institution: "Vidyamandir Sr. Sec. School, Kota",
      degree: "Senior Secondary (C.B.S.E.)",
      year: "2019 — 2021",
      grade: "90.2%",
      logo: null,
      note: "Science stream with Mathematics. Focused preparation for JEE alongside school curriculum.",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: ["C++", "Python", "C", "SQL", "VHDL", "HTML", "CSS", "JavaScript"],
    },
    {
      category: "ML / Data",
      items: ["PyTorch", "TensorFlow", "scikit-learn", "NumPy", "Pandas", "OpenAI API", "TextBlob"],
    },
    {
      category: "Systems & Tools",
      items: ["Linux", "Git", "Perforce", "gmake", "LSF", "GDB", "Matlab", "Logisim Evolution"],
    },
    {
      category: "Embedded",
      items: ["Raspberry Pi 4", "Arduino", "ESP-32", "SPI", "PyQt", "Tkinter"],
    },
    {
      category: "Web",
      items: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "JWT"],
    },
  ],

  courses: [],

  beyond: {
    intro:
      "Outside of work and code, I stay active, love exploring new places, and always enjoy picking up something new. Life's too short to stop trying things.",
    hobbies: [
      {
        title: "Tennis",
        description: "On the court whenever I can be. There's something about the mix of athleticism and precision in tennis that keeps pulling me back.",
        icon: "🎾",
      },
      {
        title: "Making Videos",
        description: "I run a YouTube channel where I share things I find interesting — tech, ideas, life. Creative outlet that's completely different from coding.",
        icon: "🎬",
        link: "https://www.youtube.com/@ayushguptazz",
      },
      {
        title: "Travel",
        description: "Love exploring new cities, cultures, and cuisines. Every trip teaches me something I couldn't have learnt otherwise.",
        icon: "✈️",
      },
      {
        title: "Trying New Things",
        description: "Whether it's a new cuisine, a random hobby, or a skill I have no business learning — I'm always up for it. Curiosity first.",
        icon: "🔍",
      },
      {
        title: "Competitive Programming",
        description: "CF Expert (1600+). There's something addictive about reducing a hard problem to a clean algorithm under time pressure.",
        icon: "⚡",
      },
    ],
  },
};
