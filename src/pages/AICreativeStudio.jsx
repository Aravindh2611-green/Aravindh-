import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const projects = [
  {
    number: "01",
    title: "The Firefly Effect",
    description:
      "A firefly's small escape becomes a reminder to keep believing and keep trying.",
    video: "/videos/ai-project-03.mp4",
    poster: "/videos/ai-project-01-poster.jpg",
    duration: "0:43",
    skills: [
      "AI Image Generation",
      "AI Video Generation",
      "AI Voice-over",
      "Creative Storytelling",
      "Video Editing",
    ],
  },
  {
    number: "02",
    title: "Strength Through Persistence",
    description:
      "A story of rebuilding after setbacks, drawing on a spider's persistence and a woodworker's resolve.",
    video: "/videos/ai-project-02.mp4",
    poster: "/videos/ai-project-02-poster.jpg",
    duration: "0:35",
    skills: [
      "AI Image Generation",
      "AI Video Generation",
      "Creative Storytelling",
      "Video Editing",
    ],
  },
  {
    number: "03",
    title: "Pressure Reveals Your Value",
    description:
      "A visual metaphor for how pressure and persistence can reveal strength and value.",
    video: "/videos/ai-project-01.mp4",
    poster: "/videos/ai-project-03-poster.jpg",
    duration: "0:17",
    skills: [
      "AI Video Generation",
      "AI Voice-over",
      "Creative Storytelling",
      "Video Editing",
    ],
  },
];

const studioSkills = [
  "AI Image Generation",
  "AI Video Generation",
  "AI Voice-over",
  "Creative Storytelling",
  "Video Editing",
  "AI-assisted Web Development",
];

const workflow = [
  "IDEA",
  "AI VISUALS",
  "AI VOICE",
  "VIDEO EDITING",
  "FINAL STORY",
];

export default function AICreativeStudio() {
  const [activeProject, setActiveProject] = useState(null);
  const playerRef = useRef(null);

  const closePlayer = () => {
    playerRef.current?.pause();
    setActiveProject(null);
  };

  return (
    <section className="creative-studio" aria-labelledby="studio-title">
      <header className="page-heading studio-heading">
        <p className="eyebrow">AI Creative Studio</p>
        <h1 className="page-title" id="studio-title">AI CREATIVE STUDIO</h1>
        <p className="studio-tagline">Ideas imagined. Stories brought to life.</p>
        <p className="page-description">
          Exploring the creative possibilities of artificial intelligence
          through visual generation, video production, AI voice-over and
          storytelling.
        </p>
      </header>

      <div className="studio-project-grid">
        {projects.map((project) => (
          <article className="surface-card studio-project-card" key={project.number}>
            <button
              className="studio-project"
              type="button"
              onClick={() => setActiveProject(project)}
              aria-haspopup="dialog"
              aria-label={`Play project ${project.number}: ${project.title}`}
            >
              <span className="studio-thumbnail">
                <img
                  src={project.poster}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <span className="studio-project-number">PROJECT {project.number}</span>
                <span className="studio-play-button" aria-hidden="true">
                  <PlayArrowIcon />
                </span>
                <span className="studio-duration">{project.duration}</span>
              </span>
              <span className="studio-project-copy">
                <span className="studio-project-title">{project.title}</span>
                <span className="studio-project-description">
                  {project.description}
                </span>
                <span className="studio-project-skills">
                  {project.skills.map((skill) => (
                    <span className="studio-skill-tag" key={skill}>{skill}</span>
                  ))}
                </span>
                <span className="studio-play-label">
                  <PlayArrowIcon fontSize="small" /> Play video
                </span>
              </span>
            </button>
          </article>
        ))}
      </div>

      <section className="studio-details" aria-labelledby="studio-skills-title">
        <div className="studio-details-block">
          <p className="eyebrow">Creative toolkit</p>
          <h2 className="section-title" id="studio-skills-title">Skills &amp; workflow</h2>
          <div className="studio-skills-list">
            {studioSkills.map((skill) => (
              <span className="studio-skill-tag" key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="studio-details-block" aria-labelledby="studio-workflow-title">
          <h3 className="studio-workflow-title" id="studio-workflow-title">
            From idea to final story
          </h3>
          <ol className="studio-workflow">
            {workflow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <p className="studio-context">
        These stories apply AI-powered visual generation, voice-over and editing
        skills developed through previous AI-related learning experiences and
        put into practice during an STS internship.
      </p>

      <Dialog
        open={Boolean(activeProject)}
        onClose={closePlayer}
        fullWidth
        maxWidth="md"
        aria-labelledby="studio-dialog-title"
        slotProps={{ paper: { className: "studio-dialog-paper" } }}
      >
        {activeProject && (
          <>
            <DialogTitle className="studio-dialog-title" id="studio-dialog-title">
              <span>
                <span className="eyebrow">Project {activeProject.number}</span>
                <span className="studio-dialog-heading">{activeProject.title}</span>
              </span>
              <IconButton
                className="studio-dialog-close"
                aria-label="Close video player"
                onClick={closePlayer}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent className="studio-dialog-content">
              <video
                key={activeProject.video}
                ref={playerRef}
                className="studio-video-player"
                src={activeProject.video}
                poster={activeProject.poster}
                controls
                playsInline
                preload="metadata"
                aria-label={activeProject.title}
              />
            </DialogContent>
          </>
        )}
      </Dialog>
    </section>
  );
}
