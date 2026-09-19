// src/components/ServiceCard.jsx
import React from "react";
import "./ServiceCard.css";

function ServiceCard({ service, onSelect }) {
  return (
    <div className="service-card" onClick={() => onSelect(service)}>
      <div className="service-card__header">
        <span className="service-card__badge">{service.badge}</span>
        <span className="service-card__rating">⭐ {service.rating}</span>
      </div>
      <h3 className="service-card__title">{service.name}</h3>
      <p className="service-card__desc">{service.description}</p>
      <div className="service-card__footer">
        <span className="service-card__location">📍 {service.location}</span>
        <span className="service-card__hours">⏰ {service.operatingHours}</span>
      </div>
    </div>
  );
}

export default ServiceCard;
