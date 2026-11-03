import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import resumePdf from "../assets/resume.pdf?url&no-inline";

export default function Resume() {
  return (
    <section aria-labelledby="resume-title">
      <header className="page-heading">
        <p className="eyebrow">Resume</p>
        <h1 className="page-title" id="resume-title">A concise overview of my experience.</h1>
        <p className="page-description">
          View the current resume below or download the PDF for later.
        </p>
      </header>

      <div className="resume-actions">
        <a className="action-link primary" href={resumePdf} download="Aravindh-R-Resume.pdf">
          <DownloadIcon fontSize="small" /> Download PDF
        </a>
        <a className="action-link" href={resumePdf} target="_blank" rel="noopener noreferrer">
          <OpenInNewIcon fontSize="small" /> Open PDF
        </a>
      </div>
      <p className="resume-caption" style={{ textAlign: "center" }}>
        If the embedded preview is unavailable in your browser, use Download PDF.
      </p>
      <iframe
        className="resume-preview"
        src={resumePdf}
        title="Aravindh R. resume PDF preview"
      />
    </section>
  );
}
