import React from 'react';
import { Icon } from './Icons';

/**
 * Footer Component
 * Institutional university footer with campus information,
 * academic assessment metadata, and student attribution.
 */
export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main-grid">
        {/* Left: Campus Information */}
        <div className="footer-brand-col">
          <div className="footer-logo-row">
            <img 
              src="/vit-logo.png" 
              alt="VIT Vellore" 
              className="footer-logo"
              onError={(e) => { e.target.onerror = null; e.target.src = "/vit-logo.svg"; }} 
            />
            <div>
              <h3 className="footer-univ-name">Vellore Institute of Technology (VIT)</h3>
              <span className="footer-camp-badge">VELLORE CAMPUS</span>
            </div>
          </div>
          <p className="footer-address">
            Vellore Campus, Tiruvalam Road, Katpadi, Vellore, Tamil Nadu – 632014, India. 
            The Campus Assistance Hub provides centralized single-page student assistance 
            for academic navigation, residential living, and emergency health services.
          </p>
          <div className="footer-contact-links">
            <span><Icon name="MapPin" size={14} /> Vellore Campus</span>
            <span><Icon name="Phone" size={14} /> +91 416 220 2000</span>
          </div>
        </div>

        {/* Center: Quick Campus Links */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Quick Campus Links</h4>
          <ul className="footer-links-list">
            <li><a href="https://vtop.vit.ac.in" target="_blank" rel="noreferrer" className="footer-link">VTOP Student Portal</a></li>
            <li><a href="https://vit.ac.in/library" target="_blank" rel="noreferrer" className="footer-link">Periyar EVR Central Library</a></li>
            <li><a href="https://vit.ac.in" target="_blank" rel="noreferrer" className="footer-link">VIT Official University Website</a></li>
            <li><a href="#service-details-anchor" className="footer-link">Health Centre & Wellness</a></li>
            <li><a href="#hots-modal-trigger" className="footer-link">Module 6 HOTS Architecture</a></li>
          </ul>
        </div>

        {/* Right: Academic Assessment Meta */}
        <div className="footer-meta-col">
          <h4 className="footer-col-title">Course Assessment Details</h4>
          <div className="assessment-card">
            <p><strong>Course:</strong> BCSE203E – Web Programming</p>
            <p><strong>Assignment:</strong> Assignment – 7 (10 Marks)</p>
            <p><strong>Student Name:</strong> Ajay Berlin</p>
            <p><strong>Reg Number:</strong> 24BCE0449</p>
            <p><strong>Faculty:</strong> Prof. Nihaal Ahmed.K</p>
            <p><strong>Slot:</strong> L31 + L32 + L51 + L52</p>
            <div className="assessment-tag">
              Demonstrating: React Environment, JSX, Component Architecture, Constructors, Component API, and LifeCycle Methods.
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="copyright-text">
          © {new Date().getFullYear()} Vellore Institute of Technology • Campus Assistance Hub Single Page Application.
        </p>
        <p className="academic-disclaimer">
          Developed for Academic Demonstration & Evaluation (Module 6) | Student: Ajay Berlin (24BCE0449)
        </p>
      </div>
    </footer>
  );
};
