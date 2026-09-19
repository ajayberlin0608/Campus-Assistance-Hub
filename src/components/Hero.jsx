// src/components/Hero.jsx
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <div className="hero__pill">
          <span className="pill-tag">VIT VELLORE</span>
          <span className="pill-text">Official Student Services & Facility Portal</span>
        </div>

        <h1 className="hero__title">
          Unified Campus <span className="highlight-text">Assistance Hub</span>
        </h1>

        <p className="hero__subtitle">
          Explore and access academic advising, 6-tier central library resources, intra-campus shuttles, residential facilities, 24/7 emergency health care, and technical support — dynamically rendered within a single interactive interface.
        </p>

        <div className="hero__stats">
          <div className="stat-card">
            <span className="stat-number">8</span>
            <span className="stat-label">Campus Services</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Emergency Care</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">SPA</span>
            <span className="stat-label">Zero Page Reloads</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">M6</span>
            <span className="stat-label">ReactJS Lifecycle</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
