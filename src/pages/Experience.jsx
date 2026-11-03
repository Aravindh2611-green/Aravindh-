import React from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const experiences = [
  {
    role: "Full Stack Development & AI Intern",
    company: "Jesus Redeems Ministries",
    date: "July 2025",
    location: "Tuticorin",
    description:
      "Completed internship training focused on Full Stack Development and Artificial Intelligence. Gained practical exposure to web development, AI applications and tools, prompt design, and workflow creation, with practical implementations guided by mentors.",
  },
  {
    role: "AI Intern",
    company: "Private Organization",
    date: "August 2025 – October 2025",
    description:
      "Completed an AI internship. Additional organization and project details are not included here.",
  },
  {
    role: "Full Stack Development Intern",
    company: "Samudhra Tech Solutions",
    date: "February 2026 – April 2026",
    description:
      "Completed a three-month internship in full-stack development. Specific project and technology details are not available in this portfolio workspace.",
  },
];

export default function Experience() {
  return (
    <section aria-labelledby="experience-title">
      <header className="page-heading">
        <p className="eyebrow">Experience</p>
        <h1 className="page-title" id="experience-title">Learning through real-world exposure.</h1>
        <p className="page-description">
          Internship experience across full-stack development and artificial
          intelligence, presented with the details currently available.
        </p>
      </header>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="surface-card experience-card" key={experience.company}>
            <div className="experience-meta">
              <div>
                <h2 className="experience-role">{experience.role}</h2>
                <p className="experience-company">
                  <WorkOutlineIcon fontSize="small" sx={{ verticalAlign: "middle", mr: 0.6 }} />
                  {experience.company}
                </p>
                {experience.location && (
                  <p className="experience-location">{experience.location}</p>
                )}
              </div>
              <span className="experience-date">{experience.date}</span>
            </div>
            <p className="experience-description">{experience.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
