// src/components/ServiceDetails.jsx
import React from "react";
import "./ServiceDetails.css";

function ServiceDetails({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="service-details overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="service-details__content" onClick={(e) => e.stopPropagation()}>
        <div className="service-details__header">
          <div className="header-badges">
            <span className="details-badge">{service.badge}</span>
            <span className="details-rating">⭐ {service.rating} / 5.0 Rating</span>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close details">✕</button>
        </div>

        <h2 className="service-details__title">{service.name}</h2>
        <p className="service-details__category">Department Category: <strong>{service.category}</strong></p>
        
        <div className="service-details__desc-box">
          <p>{service.description}</p>
        </div>

        <div className="service-details__grid">
          <div className="detail-item">
            <span className="detail-label">📍 Campus Location</span>
            <span className="detail-value">{service.location}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">⏰ Operating Hours</span>
            <span className="detail-value">{service.operatingHours}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">👤 Officer in Charge</span>
            <span className="detail-value">{service.keyPersonnel}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">📞 Direct Phone / Intercom</span>
            <span className="detail-value mono-text">{service.contactPhone}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">✉️ Official Email</span>
            <span className="detail-value mono-text">{service.contactEmail}</span>
          </div>
        </div>

        {service.facilities && service.facilities.length > 0 && (
          <div className="facilities-section">
            <h4>Available Key Facilities & Support:</h4>
            <div className="facilities-list">
              {service.facilities.map((fac, idx) => (
                <span key={idx} className="facility-tag">
                  ✓ {fac}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="service-details__footer">
          <button
            className="action-btn call-btn"
            onClick={() => alert(`Calling ${service.name} at ${service.contactPhone}`)}
          >
            📞 Call Office
          </button>
          <button
            className="action-btn mail-btn"
            onClick={() => alert(`Opening mail draft to ${service.contactEmail}`)}
          >
            ✉️ Contact via Email
          </button>
          <button className="action-btn close-action-btn" onClick={onClose}>
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
