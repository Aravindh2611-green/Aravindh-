import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Aravindh R. · Built with React.</p>
        <p>
          <Link className="footer-link" to="/contact">Get in touch</Link>
        </p>
      </div>
    </footer>
  );
}
