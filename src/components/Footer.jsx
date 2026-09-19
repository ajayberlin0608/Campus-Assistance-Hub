// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <img src="/vit-logo.svg" alt="VIT Logo" className="footer__logo" />
        <span>VIT Vellore Campus Assistance Hub</span>
      </div>
      <div className="footer__center">
        <a href="https://vtop.vit.ac.in" target="_blank" rel="noopener noreferrer">VTOP</a>
        <a href="https://library.vit.ac.in" target="_blank" rel="noopener noreferrer">Library</a>
        <a href="https://health.vit.ac.in" target="_blank" rel="noopener noreferrer">Health Centre</a>
      </div>
      <div className="footer__right">
        <span>Developed by Ajay Berlin – 24BCE0449</span>
      </div>
    </footer>
  );
}

export default Footer;
