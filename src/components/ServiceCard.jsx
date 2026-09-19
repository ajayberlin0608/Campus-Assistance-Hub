import React from 'react';
import { Icon } from './Icons';

/**
 * Reusable ServiceCard Component
 * Implements Module 6 reusable component design. Renders normalized campus
 * service objects dynamically without hardcoding card markup.
 */
export const ServiceCard = ({ service, isSelected, onSelectService }) => {
  return (
    <article 
      className={`service-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectService(service)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectService(service);
        }
      }}
      aria-label={`Campus service: ${service.name}`}
    >
      {/* Top Meta: Icon + Badges */}
      <div className="card-top-row">
        <div className="card-icon-container">
          <Icon name={service.icon} size={22} className="card-service-icon" />
        </div>
        <div className="card-badges-group">
          <span className="card-status-badge">{service.badge}</span>
          <span className="card-rating-badge">★ {service.rating}</span>
        </div>
      </div>

      {/* Category & Title */}
      <div className="card-heading-group">
        <span className="card-category-label">{service.category.toUpperCase()}</span>
        <h3 className="card-title">{service.name}</h3>
      </div>

      {/* Snippet Description */}
      <p className="card-description">
        {service.description}
      </p>

      {/* Location and Hours Info */}
      <div className="card-info-list">
        <div className="card-info-item">
          <Icon name="MapPin" size={15} className="info-icon" />
          <span className="info-text">
            <strong>Location:</strong> {service.location}
          </span>
        </div>
        <div className="card-info-item">
          <Icon name="Clock" size={15} className="info-icon" />
          <span className="info-text">
            <strong>Hours:</strong> {service.operatingHours}
          </span>
        </div>
      </div>

      {/* Bottom Action Triggers */}
      <div className="card-actions-row">
        <button 
          type="button" 
          className={`card-explore-btn ${isSelected ? 'active-btn' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onSelectService(service);
          }}
        >
          <span>{isSelected ? 'Viewing Details' : 'Explore Details'}</span>
          <Icon name="ChevronRight" size={16} />
        </button>

        <a 
          href={`tel:${service.phone.replace(/[^0-9+]/g, '')}`}
          className="card-phone-btn"
          onClick={(e) => e.stopPropagation()}
          title={`Call ${service.phone}`}
          aria-label={`Call ${service.name}`}
        >
          <Icon name="Phone" size={15} />
        </a>
      </div>
    </article>
  );
};
