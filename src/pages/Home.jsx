import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";

const certificates = [
  {
    src: "https://res.cloudinary.com/dqhylblrx/image/upload/v1755519265/1754735122562_ARAVINDH_Internship_Certificate_page-0001_qgxm2z.jpg",
    title: "Machine Learning",
    subtitle: "Internship · Economic prediction",
  },
  {
    src: "https://res.cloudinary.com/dqhylblrx/image/upload/v1755518757/WhatsApp_Image_2025-08-12_at_21.09.21_cff1eb2a_k0ifws.jpg",
    title: "Full Stack Development",
    subtitle: "Internship · Certificate",
  },
  {
    pdfUrl: "/certificates/Samudhra-Full-Stack-Internship-Certificate.pdf",
    title: "Samudhra Tech Solutions",
    subtitle: "Full Stack Development · Internship",
  },
];

export default function Home() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">AI • TECHNOLOGY • CREATIVITY</p>
          <h1 className="hero-title" id="home-title">
            <span>ARAVINDH R</span>
          </h1>
          <p className="hero-role">
            AI-Assisted Web Developer | Computer Science Graduate
          </p>
          <p className="hero-intro">
            Building digital experiences with creativity, technology and AI.
          </p>
          <div className="hero-actions">
            <Link className="action-link primary" to="/projects">
              View My Work
            </Link>
            <Link className="action-link" to="/resume">
              View Resume
            </Link>
            <a
              className="action-link"
              href="/resume/Aravindh-R-Resume.pdf"
              download="Aravindh-R-Resume.pdf"
            >
              <DownloadIcon fontSize="small" /> Download Resume
            </a>
            <Link className="action-link" to="/contact">
              Contact Me
            </Link>
          </div>
          <div className="social-links" aria-label="Social profiles">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/aravindh-r-205ab3353"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="small" /> LinkedIn
            </a>
            <a
              className="social-link"
              href="https://github.com/Aravindh2611-green"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="small" /> GitHub
            </a>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          {portraitFailed ? (
            <div className="hero-portrait-fallback" role="img" aria-label="Aravindh R">
              <span>AR</span>
              <small>Computer Science Graduate</small>
            </div>
          ) : (
            <img
              className="hero-portrait"
              src="https://res.cloudinary.com/dp5gwsru8/image/upload/v1793713653/profile_1_z69kld.jpg"
              alt="Portrait of Aravindh R."
              fetchPriority="high"
              decoding="async"
              onError={() => setPortraitFailed(true)}
            />
          )}
        </div>
      </section>

      <section className="section-block" aria-labelledby="focus-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">What I’m focused on</p>
            <h2 className="section-title" id="focus-title">Learning by building</h2>
          </div>
          <Link className="text-link" to="/about">
            More about me <ArrowForwardIcon fontSize="small" />
          </Link>
        </div>
        <div className="card-grid">
          <article className="surface-card">
            <h3>Software development</h3>
            <p>
              Building a foundation in web development and applying it through
              practical projects and internship experience.
            </p>
          </article>
          <article className="surface-card">
            <h3>AI-assisted workflows</h3>
            <p>
              Exploring AI tools, prompt design, and image and video generation
              as practical parts of a development workflow.
            </p>
          </article>
          <article className="surface-card">
            <h3>Continuous learning</h3>
            <p>
              Strengthening my fundamentals while learning new technologies
              through guided experience and hands-on work.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block" aria-labelledby="certificates-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Selected credentials</p>
            <h2 className="section-title" id="certificates-title">Internship certificates</h2>
          </div>
        </div>
        <div className="card-grid">
          {certificates.map((certificate) => (
            certificate.pdfUrl ? (
              <article className="certificate-card certificate-pdf-card" key={certificate.title}>
                <iframe
                  className="certificate-pdf-preview"
                  src={`${certificate.pdfUrl}#toolbar=0&navpanes=0`}
                  title={`${certificate.title} certificate preview`}
                  loading="lazy"
                />
                <div className="certificate-copy">
                  <strong>{certificate.title}</strong>
                  <span>{certificate.subtitle}</span>
                  <a
                    className="text-link"
                    href={certificate.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </div>
              </article>
            ) : (
              <button
                className="certificate-card"
                key={certificate.title}
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                aria-label={`View ${certificate.title} certificate`}
              >
                <img src={certificate.src} alt="" loading="lazy" decoding="async" />
                <span className="certificate-copy">
                  <strong>{certificate.title}</strong>
                  <span>{certificate.subtitle}</span>
                </span>
              </button>
            )
          ))}
        </div>
      </section>

      <Dialog
        open={Boolean(selectedCertificate)}
        onClose={() => setSelectedCertificate(null)}
        fullWidth
        maxWidth="md"
        aria-labelledby="certificate-dialog-title"
      >
        {selectedCertificate && (
          <>
            <DialogTitle id="certificate-dialog-title" sx={{ pr: 7 }}>
              {selectedCertificate.title}
              <IconButton
                aria-label="Close certificate"
                onClick={() => setSelectedCertificate(null)}
                sx={{ position: "absolute", right: 12, top: 10 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <img
                src={selectedCertificate.src}
                alt={`${selectedCertificate.title} internship certificate`}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
}
