import React from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const experiences = [
  {
    type: "Education",
    role: "B.E. Computer Science and Engineering",
    company: "Grace College of Engineering · Anna University",
    date: "2022–2026",
    icon: SchoolOutlinedIcon,
    description:
      "Bachelor of Engineering in Computer Science and Engineering at Grace College of Engineering, affiliated with Anna University.",
  },
  {
    type: "Internship training",
    role: "Full Stack Development & AI Intern",
    company: "Jesus Redeems Ministries",
    date: "July 2025",
    location: "Tuticorin",
    icon: WorkOutlineIcon,
    description:
      "Completed internship training focused on Full Stack Development and Artificial Intelligence. Gained practical exposure to web development, AI applications and tools, prompt design, and workflow creation, with practical implementations guided by mentors.",
  },
  {
    type: "Internship",
    role: "Full Stack Development Intern",
    company: "Samudhra Tech Solutions",
    date: "16 February 2026 – 18 April 2026",
    icon: WorkOutlineIcon,
    description:
      "Completed an internship in full-stack development.",
    certificateUrl:
      "/certificates/Samudhra-Full-Stack-Internship-Certificate.pdf",
  },
];

export default function Experience() {
  return (
    <section aria-labelledby="experience-title">
      <header className="page-heading">
        <p className="eyebrow">Experience</p>
        <h1 className="page-title" id="experience-title">Education, training &amp; experience.</h1>
        <p className="page-description">
          A timeline of my education and internship experience, with organization
          names, roles, and dates preserved as documented.
        </p>
      </header>

      <ol className="career-timeline">
        {experiences.map((experience) => {
          const Icon = experience.icon;

          return (
            <li className="career-timeline-item" key={`${experience.role}-${experience.company}`}>
              <span className="career-timeline-marker" aria-hidden="true">
                <Icon fontSize="small" />
              </span>
              <article className="surface-card experience-card">
                <div className="experience-meta">
                  <div>
                    <span className="career-type">{experience.type}</span>
                    <h2 className="experience-role">{experience.role}</h2>
                    <p className="experience-company">{experience.company}</p>
                    {experience.location && (
                      <p className="experience-location">{experience.location}</p>
                    )}
                  </div>
                  <span className="experience-date">{experience.date}</span>
                </div>
                <p className="experience-description">{experience.description}</p>
                {experience.certificateUrl && (
                  <a
                    className="text-link"
                    href={experience.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                )}
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
