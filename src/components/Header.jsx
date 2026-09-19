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
        <span className="header__title">Campus Assistance Hub</span>
      </div>
      <div className="header__center">
        <marquee className="header__ticker" scrollamount="5">
          Welcome to VIT Vellore Campus Assistance Hub – your one‑stop portal for all campus services!
        </marquee>
      </div>
      <div className="header__right">
        <span className="header__clock">{formatted}</span>
        <button className="header__btn" onClick={onShowHots}>⚡ HOTS</button>
        <button className="header__btn emergency" onClick={onShowEmergency}>🚨 Emergency</button>
      </div>
    </header>
  );
}

export default Header;
