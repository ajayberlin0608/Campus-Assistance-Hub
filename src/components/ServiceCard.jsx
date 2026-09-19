// src/components/ServiceCard.jsx
import React from "react";
import "./ServiceCard.css";

function ServiceCard({ service, onSelect }) {
  const getBadgeClass = (category) => {
    switch (category) {
      case "Academic Support": return "badge-academic";
      case "Library Services": return "badge-library";
      case "Transportation": return "badge-transport";
      case "Hostel Services": return "badge-hostel";
      case "Health & Wellness": return "badge-health";
      case "Technical Support": return "badge-tech";
      case "Security": return "badge-security";
      case "Student Welfare": return "badge-welfare";
      default: return "badge-default";
    }
  };

  return (
    <div className="service-card" onClick={() => onSelect(service)} tabIndex="0" role="button" aria-label={`View details for ${service.name}`}>
      <div className="service-card__header">
        <span className={`service-card__badge ${getBadgeClass(service.category)}`}>
          {service.badge}
        </span>
        <span className="service-card__rating">
          ⭐ <strong>{service.rating}</strong>/5.0
        </span>
      </div>

      <h3 className="service-card__title">{service.name}</h3>
      <p className="service-card__desc">{service.description}</p>

      <div className="service-card__details-meta">
        <div className="meta-item">
          <span className="meta-icon">📍</span>
          <span className="meta-text">{service.location}</span>
        </div>
        <div className="meta-item">
          <span className="meta-icon">⏰</span>
          <span className="meta-text">{service.operatingHours}</span>
        </div>
      </div>

      <div className="service-card__footer">
        <span className="action-hint">Click to inspect details</span>
        <span className="action-arrow">➔</span>
      </div>
    </div>
  );
}

export default ServiceCard;
