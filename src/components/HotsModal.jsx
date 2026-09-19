// src/components/HotsModal.jsx
import React from "react";
import "./HotsModal.css";

function HotsModal({ onClose }) {
  return (
    <div className="modal overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>HOTS Scalability Justification</h2>
        <p>
          The application is built with a data‑driven architecture. Adding new services only requires extending <code>src/data/services.js</code>; no additional component code is needed. The ServiceGrid maps the data dynamically, guaranteeing O(1) rendering per card and O(n) total, which scales comfortably to 50+ services.
        </p>
        <ul>
          <li>Component reuse – ServiceCard is used for every entry.</li>
          <li>Styling via CSS variables enables theming without code changes.</li>
          <li>State management via React hooks keeps memory footprint low.</li>
        </ul>
      </div>
    </div>
  );
}

export default HotsModal;
