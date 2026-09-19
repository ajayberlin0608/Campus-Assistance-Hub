// src/components/EmergencyModal.jsx
import React from "react";
import "./EmergencyModal.css";

function EmergencyModal({ onClose }) {
  const contacts = [
    { label: "Campus Ambulance & Emergency Clinic", phone: "+91-9795-555555", ext: "Ext. 5555", icon: "🚑", desc: "24/7 on-campus ambulance with emergency tie-up to CMC Vellore." },
    { label: "Chief Security Control Room (Gate 1)", phone: "+91-9795-777777", ext: "Ext. 7777", icon: "🛡️", desc: "Main security hub, patrol dispatch, and gate access." },
    { label: "VIT Health Centre Helpline", phone: "+91-9795-555556", ext: "Ext. 5556", icon: "🏥", desc: "Inpatient medical doctor on duty & dispensary." },
    { label: "Chief Warden Office (Hostel Emergency)", phone: "+91-9795-444444", ext: "Ext. 4444", icon: "🏢", desc: "Men's & Ladies' Hostel supervisor desk." },
    { label: "National Anti-Ragging Toll-Free Helpline", phone: "1800-180-5522", ext: "Toll-Free", icon: "⚖️", desc: "UGC & VIT zero-tolerance grievance monitoring." },
    { label: "Vellore Local Police Assistance", phone: "100 / 0416-2222222", ext: "City Police", icon: "🚓", desc: "Katpadi Police Station jurisdictional support." },
  ];

  return (
    <div className="modal overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal__content emergency-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <div className="modal__badge emergency-badge">24/7 PRIORITY HELPLINES</div>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">✕</button>
        </div>

        <h2 className="modal__title emergency-title">
          VIT Vellore Emergency Assistance Directory
        </h2>
        <p className="modal__subtext">
          Direct priority contacts for health, security, hostel, and anti-ragging assistance.
        </p>

        <div className="emergency-list">
          {contacts.map((c, i) => (
            <div key={i} className="emergency-card">
              <div className="emergency-card__icon">{c.icon}</div>
              <div className="emergency-card__info">
                <span className="emergency-card__label">{c.label}</span>
                <span className="emergency-card__desc">{c.desc}</span>
                <div className="emergency-card__meta">
                  <span className="phone-num">{c.phone}</span>
                  <span className="ext-badge">{c.ext}</span>
                </div>
              </div>
              <button
                className="dial-btn"
                onClick={() => alert(`Dialing ${c.label}: ${c.phone}`)}
              >
                📞 Call Now
              </button>
            </div>
          ))}
        </div>

        <div className="modal__footer">
          <span className="student-signature">Student: AJAY BERLIN (24BCE0449) – VIT Vellore</span>
          <button className="action-btn close-action-btn" onClick={onClose}>Close Directory</button>
        </div>
      </div>
    </div>
  );
}

export default EmergencyModal;
