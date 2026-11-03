import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "fee-management",
    title: "Fee Management System With Automated Fee Assignment",
    description:
      "A local, non-deployed project described as focusing on fee management and automated assignment. Its source code is not present in this portfolio workspace.",
    status: "Local Project",
    stack: "Technology stack not verified",
    featured: true,
    details:
      "The supplied project brief mentions automated fee assignment and fee structures by course, semester, and student category, alongside student, admin, payment, and reporting workflows. Those details and the technology stack have not been independently checked against the project source because that source is not available in this workspace. No public demo is available.",
  },
  {
    id: "tamil-ocr",
    title: "AI-assisted Tamil OCR",
    description:
      "An AI-assisted Tamil OCR and text-processing project. Detailed implementation and technology information is not available in this portfolio workspace.",
    status: "Project Showcase",
    stack: "Technology stack not verified",
    details:
      "The project is described as combining Tamil OCR with text processing. Additional implementation details and a public deployment link were not provided.",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "This portfolio presents my background, internship experience, skills, and selected projects.",
    status: "Website",
    stack: "React · Vite · Material UI",
    details:
      "A React and Vite portfolio using Material UI and React Router. The source code for this website is available in the current repository.",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section aria-labelledby="projects-title">
      <header className="page-heading">
        <p className="eyebrow">Selected work</p>
        <h1 className="page-title" id="projects-title">Projects built through practice.</h1>
        <p className="page-description">
          A few software and AI-related projects. Work that isn’t deployed is
          clearly marked, and unverified implementation details are not
          presented as fact.
        </p>
      </header>

      <div className="card-grid">
        {projects.map((project) => (
          <article
            className={`surface-card project-card${project.featured ? " featured" : ""}`}
            key={project.id}
          >
            <div>
              <p className="eyebrow">{project.featured ? "Featured project" : "Project"}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className="project-meta">
              <span className="project-status">{project.status}</span>
              <span className="project-stack">{project.stack}</span>
            </div>
            <button
              className="text-link"
              type="button"
              onClick={() => setActiveProject(project)}
              aria-haspopup="dialog"
              aria-label={`View details for ${project.title}`}
              style={{ alignSelf: "flex-start", marginTop: 16, border: 0, background: "none", padding: 0, font: "inherit", cursor: "pointer" }}
            >
              View project details <ArrowOutwardIcon fontSize="small" />
            </button>
          </article>
        ))}
      </div>

      <Dialog
        open={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        fullWidth
        maxWidth="sm"
        aria-labelledby="project-dialog-title"
      >
        {activeProject && (
          <>
            <DialogTitle id="project-dialog-title">{activeProject.title}</DialogTitle>
            <DialogContent>
              <p className="project-dialog-content">{activeProject.details}</p>
              <p className="project-dialog-content">
                Status: <strong>{activeProject.status}</strong>
                <br />
                Technology: <strong>{activeProject.stack}</strong>
              </p>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
              <button
                className="action-button"
                type="button"
                onClick={() => setActiveProject(null)}
              >
                Close
              </button>
            </DialogActions>
          </>
        )}
      </Dialog>

      <p className="section-note" style={{ marginTop: 24 }}>
        Have a question about a project?{" "}
        <Link className="text-link" to="/contact">Contact me</Link>
      </p>
    </section>
  );
}
