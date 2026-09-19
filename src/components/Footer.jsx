// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__branding">
          <div className="footer__brand-header">
            <img src="/vit-logo.svg" alt="VIT Logo" className="footer__logo" />
            <div>
              <h4>Vellore Institute of Technology</h4>
              <p>Campus Assistance Hub — Single Page Application (SPA)</p>
            </div>
          </div>
          <p className="footer__tagline">
            Designed and engineered for seamless campus services navigation under BCSE203E Web Programming.
          </p>
        </div>

        <div className="footer__links-col">
          <h5>Official Portals</h5>
          <a href="https://vtop.vit.ac.in" target="_blank" rel="noopener noreferrer">➔ VTOP Portal</a>
          <a href="https://library.vit.ac.in" target="_blank" rel="noopener noreferrer">➔ Periyar EVR Library</a>
          <a href="https://vit.ac.in" target="_blank" rel="noopener noreferrer">➔ VIT Official Website</a>
          <a href="https://vitstudent.ac.in" target="_blank" rel="noopener noreferrer">➔ Student Webmail</a>
        </div>

        <div className="footer__student-card">
          <h5>Student Submission Details</h5>
          <div className="student-grid">
            <div className="sg-item">
              <span className="sg-lbl">Student Name:</span>
              <span className="sg-val">AJAY BERLIN</span>
            </div>
            <div className="sg-item">
              <span className="sg-lbl">Register Number:</span>
              <span className="sg-val mono">24BCE0449</span>
            </div>
            <div className="sg-item">
              <span className="sg-lbl">Course & Code:</span>
              <span className="sg-val">BCSE203E – Web Programming</span>
            </div>
            <div className="sg-item">
              <span className="sg-lbl">Faculty & Slot:</span>
              <span className="sg-val">Prof. Nihaal Ahmed.K (L31+L32+L51+L52)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2026 Vellore Institute of Technology (VIT). All Rights Reserved.</span>
        <span>Public Repository: <a href="https://github.com/ajayberlin0608/Campus-Assistance-Hub" target="_blank" rel="noopener noreferrer" className="repo-link">github.com/ajayberlin0608/Campus-Assistance-Hub</a></span>
      </div>
    </footer>
  );
}

export default Footer;
