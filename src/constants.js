export const basePath = "/dharahas-portfolio";

export const WiseTechGlobal = {
  points: [
    `Participated in a 9-month rotation program across three distinct enterprise-level engineering teams
the E2E Test Framework Team (Winzor E2E), the Logistic Data Integration Team (ILS Ocean), and the
Internal Web Development Platform Team (GLOW Dex). Demonstrated the ability to adapt quickly to
varied tech stacks, coding standards, and collaborative work styles.`,
    `Resolved 60+ defects across critical systems, including a Playwright-based E2E testing framework, a
production-grade web scraping system, and a world-class internal web development platform used
across teams — improving system reliability, developer experience, and overall release quality`,
    `I developed the full-stack Port Calls module for a larger logistics management application. On the
frontend, I used React, Redux, and React Router to implement views for listing, creating, editing, and
deleting port call records. On the backend, I implemented the corresponding ASP.NET Core controller,
using LINQ to perform queries and updates on a SQL Server database. Used by internal product teams
to manage 500+ port calls monthly.`,
    `Owned the end-to-end integration of a third-party port call data API into the existing ProducerConsumer data ingestion pipeline, 
  implementing both the scraper to fetch and encrypt data, and the
processor to parse, validate, and inject structured port call data into the operational SQL database
using LINQ queries and Entity Framework Core.
`,
    `Collaborated with a senior developer to integrate Kafka-based structured logging into an internal
Playwright E2E testing framework; implemented Kafka producers to emit test logs and assisted in
writing Elasticsearch consumers to index and visualize test data in Kibana. Wrote PowerShell and
batch file scripts to assist in automating the deployment.`,
    `Worked with product teams to identify user scenarios and implemented Playwright-based end-to-end
integration tests, reducing manual QA overhead for feature releases; contributed custom test helpers
to the shared test library, enabling faster and more consistent test development by other engineers.`,
    `Collaborated with a Senior developer to design and implement a Jest-based testing utility for a
configuration-driven test framework; used compile-time yaml config generation and custom test
helpers to enable testing of action menus on dynamic data table component within an internal web
development platform.
`,
  ],
  name: "WiseTech Global",
  position: "Associate Software Engineer",
};

export const PwC = {
  points: [
    `Developed and integrated a Python-based auto-modeling utility to automate model selection for
predictive analytics over client datasets, supporting faster and more informed business decisionmaking.
`,
    `Leveraged Power BI to analyze and visualize client sales data; collaborated with senior consultants to
uncover actionable insights that influenced strategic improvements.`,
    `Supported the evaluation of a health-focused chatbot, analyzing conversational flows, system
performance, and user experience to guide technical enhancements.`,
    `Gained hands-on experience in data-driven development, collaborating cross-functionally with
stakeholders to translate business challenges into analytical and technical solutions.
`,
  ],
  name: "PriceWaterHouseCoopers",
  position: "Technology Consultant Intern",
};

export const Project = [
  {
    imgSrc: `${basePath}/projects/the-donut-hole.png`,
    content:
      "The project demonstrates modern web experiences built using 3d models.",
    title: "The Donut hole",
    link: "https://dharahas-h.github.io/the-donut-hole/",
  },
  {
    imgSrc: `${basePath}/projects/recommender-system.png`,
    content: "The projects/assignments I've worked on in my CS courses",
    title: "ML Projects",
    link: "https://github.com/Dharahas-h/Projects",
  },
  {
    imgSrc: `${basePath}/projects/whatapp-gpt.png`,
    content:
      "WhatsApp bot that uses OpenAI to answer questions, used webhooks to respond to messages.",
    title: "WhatsApp-GPT",
    link: "https://github.com/Dharahas-h/WhatsApp-GPT",
  },
];

export const page = {
  EXPERIENCE: "Work Experience",
  ABOUT: "About me",
  PROJECTS: "Projects",
  NONE: -1,
};
