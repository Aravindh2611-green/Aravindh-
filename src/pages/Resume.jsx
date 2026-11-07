import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const resumePdf = "/resume/Aravindh-R-Resume.pdf";

export default function Resume() {
  return (
    <section aria-labelledby="resume-title">
      <header className="page-heading">
        <p className="eyebrow">Resume</p>
        <h1 className="page-title" id="resume-title">A concise overview of my experience.</h1>
        <p className="page-description">
          View the latest resume below or download the PDF for later.
        </p>
      </header>

      <div className="resume-actions">
        <a className="action-link primary" href={resumePdf} target="_blank" rel="noopener noreferrer">
          <OpenInNewIcon fontSize="small" /> View Resume
        </a>
        <a className="action-link" href={resumePdf} download="Aravindh-R-Resume.pdf">
          <DownloadIcon fontSize="small" /> Download Resume
        </a>
      </div>
      <p className="resume-caption" style={{ textAlign: "center" }}>
        If the embedded preview is unavailable in your browser, use View Resume or Download Resume.
      </p>
      <iframe
        className="resume-preview"
        src={`${resumePdf}#view=FitH`}
        title="Aravindh R. resume PDF preview"
        loading="lazy"
      />
    </section>
  );
}
