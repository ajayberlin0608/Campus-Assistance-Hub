import React, { useState, useEffect } from 'react';
import { Icon } from './Icons';
import { CAMPUS_ANNOUNCEMENTS } from '../data/services';

export const Header = ({ onOpenHots, onOpenEmergency }) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  // Digital clock update effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Rotating campus announcements
  useEffect(() => {
    const ticker = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % CAMPUS_ANNOUNCEMENTS.length);
    }, 5000);
    return () => clearInterval(ticker);
  }, []);

  return (
    <header className="header-wrapper">
      {/* Top Navbar */}
      <nav className="navbar-container">
        <div className="brand-section">
          <img 
            src="/vit-logo.png" 
            alt="VIT Vellore Emblem" 
            className="brand-logo" 
            onError={(e) => { e.target.onerror = null; e.target.src = "/vit-logo.svg"; }}
          />
          <div className="brand-text">
            <div className="brand-title-row">
              <h1 className="brand-title">VIT Vellore</h1>
              <span className="campus-badge">MAIN CAMPUS</span>
            </div>
            <p className="brand-subtitle">Vellore Institute of Technology • Campus Assistance Hub</p>
          </div>
        </div>

        <div className="header-actions">
          {/* Live Clock Display */}
          <div className="clock-badge" title="Campus Local Time (IST)">
            <Icon name="Clock" size={15} className="clock-icon" />
            <span className="clock-text">{currentTime}</span>
          </div>

          {/* HOTS Analysis Button */}
          <button 
            type="button" 
            className="btn-hots"
            id="hots-modal-trigger"
            onClick={onOpenHots}
            title="Module 6 HOTS Architecture Justification"
          >
            <Icon name="Sparkles" size={15} />
            <span>⚡ HOTS Scalability</span>
          </button>

          {/* Emergency Helplines Button */}
          <button 
            type="button" 
            className="btn-emergency"
            id="emergency-modal-trigger"
            onClick={onOpenEmergency}
            title="Open 24/7 University Emergency Directory"
          >
            <Icon name="ShieldAlert" size={15} />
            <span>🚨 Emergency 24/7</span>
          </button>
        </div>
      </nav>

      {/* Campus Notice Marquee / Ticker */}
      <div className="announcement-banner">
        <div className="announcement-badge">CAMPUS NOTICE</div>
        <div className="announcement-content" key={announcementIndex}>
          <span>{CAMPUS_ANNOUNCEMENTS[announcementIndex]}</span>
        </div>
        <div className="announcement-indicator">
          VIT Vellore • Katpadi • Estd 1984
        </div>
      </div>
    </header>
  );
};
