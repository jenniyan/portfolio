import { useState } from "react";
import { usePortfolioUI } from "../hooks/UsePortfolioUI";
import book from "../../assets/book.png";
import fairandCover from "../../assets/fairand-cover.png";
import envoyCover from "../../assets/envoy-cover.png"
import saucynatorCover from "../../assets/saucynator-cover.png";
import portfolioCover from "../../assets/portfolio-cover.png";
import mlCover from "../../assets/ml-cover.png";
import kinnectCover from "../../assets/kinnect-cover.png";
import avisionCover from "../../assets/avision-cover.png";
import pageFlipSound from "../../assets/sounds/page-flip.ogg";

const projects = [
  {
    title: "Avision",
    time: "april 2026 - june 2026",
    description:
      "Rebuilt a legacy static HTML/HTTP website from scratch as a full-stack TypeScript application using React 19, React Router, Tailwind CSS, Express, and PostgreSQL (Neon), with HTTPS and client-side routing replacing hand-coded .html pages",
    tech: "Front-end: React, Tailwind CSS | Backend: Node.js, Express, PostgreSQL (Neon)",
    repo: "https://github.com/avisionlabs/website",
    cover: avisionCover,
  },
  {
    title: "Kinnect",
    time: "jan 2026 - june 2026",
    description: "Kinnect is a location-based social prototype that helps people discover and connect with nearby users using tags, live video, and chat. It’s designed to make meeting and talking with new people feel easy and natural.\n\nWon best project at UCI's IN4MATX43 Spring26 cohort (293 enrolled students and ~60 projects).",
    tech: "React Native, Expo, Node.js, Express, Redis",
    demo: "https://www.youtube.com/watch?v=w8Q-sfP9mt8",
    repo: "https://github.com/jenniyan/kinnect",
    cover: kinnectCover
  },
  {
    title: "Fair&",
    time: "may 2026 (submitted to venushacks)",
    description: "Women are disproportionately assigned NPT's in the workplace. Fair& is an AI-powered Slack tool that detects and tracks non-promotable tasks (NPTs) in workplace conversations to uncover invisible labor imbalances. It analyzes messages in real time and visualizes workload equity through interactive analytics dashboards.",
    tech: "JavaScript, React, Node.js, Express, Slack Bolt SDK, Anthropic Claude API, Supabase",
    demo: "",
    repo: "https://github.com/jenniyan/fairand",
    devpost: "https://devpost.com/software/fair-le4gy0",
    cover: fairandCover
  },
  {
    title: "Envoy: AI Postgres Client",
    time: "mar 2026 (submitted to irvinehacks)",
    description: "Envoy is an AI-powered Postgres client that lets you query any PostgresSQL database using natural language. Type a query in natural language and Envoy translates it to SQL, shows you exactly which rows will change, tells you the risk level, and asks for your approval before a single row is touched.",
    tech: "Typescript, Next.js, Anthropic Claude API, Postgres Model Context Protocol, shadcn, Tailwind CSS, AI SDK by Vercel",
    demo: "https://youtu.be/aV2i10SZUNM",
    repo: "https://github.com/Satchel05/IrvineHacks2026",
    devpost: "https://devpost.com/software/envoy-ai-postgres-client",
    cover: envoyCover,
  },
    {
    title: "Personal Portfolio",
    time: "dec 2025 - present",
    description: "A simple web app with front-end features",
    tech: "React, HTML/CSS",
    demo: "https://www.google.com",
    repo: "https://github.com/jenniyan/jenyanportfolio",
    cover: portfolioCover,
  },
  {
    title: "Saucynator",
    time: "jun 2024 - aug 2024",
    description:
      "Simple, fun chatbot built with OpenAI’s GPT-3.5 that suggests recipes based on ingredients users already have. Created as an exploratory project to learn prompt design, long-term memory, and experimenting with how we can make cooking feel more approachable for beginners.",
    tech: "Python, Flask, Google Colab, OpenAI API, HTML/CSS/JS front-end",
    demo: "https://www.loom.com/share/1c8b9a0e7c5b4d9f8e1c3a2b6f4e5a6",
    repo: "https://github.com/jenniyan/saucynator",
    cover: saucynatorCover,
  },
  {
    title: "Machine Learning for Pediatric Pneumonia from X-ray Detection",
    time: "apr 2024 - july 2024",
    description: "Research paper completed with 1-on-1 mentor guidance analyzing multiple machine learning models for classifying lung X-ray images for pneumonia. Using a dataset of healthy and pneumonia-diagnosed lungs, we trained and tested three models: a custom scikit-learn model, an OpenAI zero-shot classification model, and a specialized pretrained pneumonia detection model. The study compares their performance, accuracy, efficiency, and potential improvements.",
    tech: "Python, Numpy, Matplotlib, Scikit-learn, TensorFlow",
    demo: "https://docs.google.com/document/d/1lzkesxp3Uh44X8hECLNe2RMTWxz470mHqzMn6l8UUuo/edit?tab=t.0#heading=h.32d7h9xrbifb",
    repo: "https://github.com/jenniyan/machine_learning",
    cover: mlCover
  },
  // {
  //   title: "Celebrating Life Community Health Center",
  //   time: "nov 2025 - may 2026",
  //   description: ".",
  //   tech: "Python, Numpy, Matplotlib, Scikit-learn, TensorFlow",
  //   demo: ".",
  //   repo: "https://github.com/ctc-uci/clchc",
  //   cover: mlCover
  // },
];

export default function ProjectsModal() {
  const { activeModal, closeModal } = usePortfolioUI();
  const [page, setPage] = useState(0);

  if (activeModal !== "projects") return null;

    const playPageFlip = () => {
    const audio = new Audio(pageFlipSound);
    audio.volume = 0.3; // adjust volume
    audio.play();
  };
  
  const nextPage = () => {
      if (page < projects.length - 1) {
        playPageFlip();
        setPage((prev) => Math.min(prev + 1, projects.length - 1));
      }
    };
  
    const prevPage = () => {
      if (page > 0) {
        playPageFlip();
        setPage((prev) => Math.max(prev - 1, 0));
      }
    };

  const project = projects[page];

  return (
    <div className="modal">
      <img src={book} className="book" alt="Book background" />
      <button className="closeBookButton" onClick={closeModal}>
        X
      </button>
      <div className="page left">
        <p className="header">{project.title}</p>
        <p className="time">{project.time}</p>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          {" "}
          demo/report
        </a>{" "}
        |{" "}
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          repo
        </a>
        {project.devpost && (
          <>
            {" | "}
            <a href={project.devpost} target="_blank" rel="noopener noreferrer">
              devpost
            </a>
          </>
        )}
        <img
          src={project.cover}
          alt={`${project.title} cover`}
          className="cover"
        />
      </div>
      <div className="page right">
        <div className="description">
          {project.description.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <p> --- </p>
        <p>
          <strong>Tech Used:</strong> <span> {project.tech}</span>
        </p>
        <div className="controls">
          <button
            className="prevButton"
            onClick={prevPage}
            disabled={page === 0}
          >
            Prev
          </button>
          <button
            className="nextButton"
            onClick={nextPage}
            disabled={page === projects.length - 1}
          >
            Next
          </button>
        </div>
      </div>
      <div className="pageBottom">
        <p>
          {page + 1} / {projects.length}
        </p>
      </div>
    </div>
  );
}
