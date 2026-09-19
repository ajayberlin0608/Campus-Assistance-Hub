// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import "./Header.css";

function Header({ onShowHots, onShowEmergency }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatted = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <header className="header">
      <div className="header__left">
        <img src="/vit-logo.svg" alt="VIT Logo" className="header__logo" />
        <div className="header__brand-text">
          <span className="header__title">Campus Assistance Hub</span>
          <span className="header__subtitle">VIT Vellore Main Campus</span>
        </div>
      </div>

      <div className="header__center">
        <div className="header__ticker-wrap">
          <span className="ticker-badge">LATEST NOTICE</span>
          <marquee className="header__ticker" scrollamount="4">
            📢 Welcome to VIT Vellore Campus Assistance Hub | 24/7 Student Grievance & Facility Support | FFCS Advising at Technology Tower (TT) | Central Library Open till 10:00 PM | Health Centre 24/7 Emergency Ambulance: Ext. 5555
          </marquee>
        </div>
      </div>

      <div className="header__right">
        <div className="header__student-badge" title="Student Registration Credentials">
          <span className="student-icon">🎓</span>
          <div className="student-info">
            <span className="student-name">AJAY BERLIN</span>
            <span className="student-reg">24BCE0449</span>
          </div>
        </div>

        <span className="header__clock">🕒 {formatted} IST</span>
        <button className="header__btn hots-btn" onClick={onShowHots} title="Module 6 HOTS Justification">⚡ HOTS</button>
        <button className="header__btn emergency-btn" onClick={onShowEmergency} title="24/7 Priority Emergency Helplines">🚨 Emergency</button>
      </div>
    </header>
  );
}

export default Header;
