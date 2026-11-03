import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

export default function About() {
  return (
    <section aria-labelledby="about-title">
      <header className="page-heading">
        <p className="eyebrow">A little about me</p>
        <h1 className="page-title" id="about-title">Curious by nature, practical by design.</h1>
        <p className="page-description">
          I’m a Computer Science graduate interested in software development
          and thoughtful, practical uses of AI.
        </p>
      </header>

      <div className="content-grid">
        <article className="surface-card about-copy">
          <h2 className="section-title">My approach</h2>
          <p>
            I completed my Bachelor of Engineering in Computer Science and
            Engineering at Grace College of Engineering, affiliated with Anna
            University. Internships in full-stack development and artificial
            intelligence gave me practical exposure to web development, AI
            applications, prompting, and workflow creation.
          </p>
          <p>
            I’m continuing to strengthen my programming fundamentals while
            learning new technologies through hands-on projects, feedback, and
            collaboration. My goal is to contribute to useful software and keep
            growing as an adaptable developer.
          </p>
        </article>

        <div className="content-grid">
          <article className="surface-card education-card">
            <SchoolOutlinedIcon color="primary" />
            <span className="education-period">2022–2026</span>
            <h2>B.E. Computer Science and Engineering</h2>
            <span className="education-school">Grace College of Engineering</span>
            <span className="education-school">Anna University</span>
          </article>
          <article className="surface-card">
            <AutoAwesomeOutlinedIcon color="primary" />
            <h2 style={{ marginTop: 12 }}>AI and software</h2>
            <p>
              Practical exposure to AI-assisted development, prompt engineering,
              AI-generated images and videos, and software projects.
            </p>
          </article>
          <article className="surface-card">
            <TrendingUpOutlinedIcon color="primary" />
            <h2 style={{ marginTop: 12 }}>What’s next</h2>
            <p>
              Keep learning, build useful applications, and apply software and
              AI tools thoughtfully to real-world problems.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
