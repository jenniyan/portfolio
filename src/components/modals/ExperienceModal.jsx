import { useState } from "react";
import { usePortfolioUI } from "../hooks/UsePortfolioUI";
import book from "../../assets/book.png";
import clchcCover from "../../assets/clchc-cover.png";
import ittiaCover from "../../assets/ittia-cover.png";
import archwestCover from "../../assets/archwest-cover.jpg"
import pageFlipSound from "../../assets/sounds/page-flip.ogg";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Archwest Capital",
    date: "September 2026 - Present",
    description:
      "Building and validating internal tools to improve financial reporting accuracy and speed up cross-team workflows.",
    tech: "Retool, SQL, Microsoft Azure",
    cover: archwestCover
  },
  {
    title: "Software Engineering Intern",
    company: "Ittia",
    date: "May 2026 - August 2026",
    description:
      "Improved Cypress E2E test reliability from 2/13 to 12/13 passing, added row/column-level SQL error markers to close a UX gap, and led a Figma redesign of the dashboard home page (29 screens across 6 weeks of leadership reviews) that was approved for production.",
    tech: "Front-end: React, Tailwind CSS | Backend: Node.js, Express, PostgreSQL (Neon)",
    cover: ittiaCover,
  },
  {
    title: "Full Stack Developer",
    company: "Commit the Change",
    date: "October 2025 - June 2026",
    description:
      "Building a centralized appointment management platform for non-profit Celebrating Life Community Health Center (CLCHC), which includes daily appointment quota creation, live quota-progress tracking, version logs, and tiered permission portals. CLCHC provides affordable healthcare to 22,000+ patients in Orange County. Implemented a data caching solution, reducing unnecessary backend data fetching using TanStack Query (react-query).",
    tech: "Front-end: React, Chakra UI, HTML/CSS | Backend: Node.js, Express, PostgreSQL | User Authentication: Firebase",
    repo: "https://github.com/ctc-uci/clchc",
    cover: clchcCover,
  },
];

export default function ExperienceModal() {
  const { activeModal, closeModal } = usePortfolioUI();
  const [page, setPage] = useState(0);

  if (activeModal !== "experiences") return null;

    const playPageFlip = () => {
    const audio = new Audio(pageFlipSound);
    audio.volume = 0.3;
    audio.play();
  };
  
  const nextPage = () => {
      if (page < experiences.length - 1) {
        playPageFlip();
        setPage((prev) => Math.min(prev + 1, experiences.length - 1));
      }
    };
  
    const prevPage = () => {
      if (page > 0) {
        playPageFlip();
        setPage((prev) => Math.max(prev - 1, 0));
      }
    };

  const experience = experiences[page];

  return (
    <div className="modal">
      <img src={book} className="book" alt="Book background" />
      <button className="closeBookButton" onClick={closeModal}>
        X
      </button>
      <div className="page left">
        <p className="header">{experience.title}</p>
        <p className="company">{experience.company}</p>
        <p className="date">{experience.date}</p>
        <img
          src={experience.cover}
          alt={`${experience.title} cover`}
          className="cover"
        />
      </div>
      <div className="page right">
        <p>{experience.description}</p>
        <p> --- </p>
        <p>
          <strong>Tech Used:</strong> <p>{experience.tech}</p>
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
            disabled={page === experiences.length - 1}
          >
            Next
          </button>
        </div>
      </div>
      <div className="pageBottom">
        <p>
          {page + 1} / {experiences.length}
        </p>
      </div>
    </div>
  );
}
