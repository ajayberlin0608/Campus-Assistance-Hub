// src/components/EmergencyModal.jsx
import React from "react";
import "./EmergencyModal.css";

function EmergencyModal({ onClose }) {
  return (
    <div className="modal overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>24/7 Emergency Directory</h2>
        <ul>
          <li>📞 Ambulance – +91-9795-999999</li>
          <li>📞 Campus Security – +91-9795-777777</li>
          <li>📞 Health Centre – +91-9795-555555</li>
          <li>📞 Anti‑Ragging Helpline – 1098</li>
        </ul>
        <p>Click a number to dial (simulated).</p>
      </div>
    </div>
  );
}

export default EmergencyModal;
