// src/components/ServiceDetails.jsx
import React from "react";
import "./ServiceDetails.css";

function ServiceDetails({ service, onClose }) {
  return (
    <div className="service-details overlay" onClick={onClose}>
      <div className="service-details__content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{service.name}</h2>
        <p>{service.description}</p>
        <ul>
          <li><strong>Location:</strong> {service.location}</li>
          <li><strong>Hours:</strong> {service.operatingHours}</li>
          <li><strong>Contact:</strong> {service.contactPhone} / {service.contactEmail}</li>
          <li><strong>Key Personnel:</strong> {service.keyPersonnel}</li>
          <li><strong>Facilities:</strong> {service.facilities.join(", ")}</li>
        </ul>
      </div>
    </div>
  );
}

export default ServiceDetails;
