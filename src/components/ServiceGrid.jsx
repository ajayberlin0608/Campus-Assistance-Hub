import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Icon } from './Icons';

/**
 * ServiceGrid Component
 * Coordinates dynamic layout rendering and passes down callbacks to reusable ServiceCards.
 */
export const ServiceGrid = ({ 
  services, 
  totalCount, 
  selectedService, 
  onSelectService, 
  onResetFilters 
}) => {
  return (
    <section className="service-grid-section">
      <div className="grid-header-meta">
        <div className="results-count-badge">
          Showing <strong>{services.length}</strong> of <strong>{totalCount}</strong> Campus Services
        </div>
      </div>

      {services.length === 0 ? (
        <div className="empty-state-card">
          <Icon name="Search" size={40} className="empty-icon" />
          <h4 className="empty-title">No Matching Campus Services Found</h4>
          <p className="empty-desc">
            No campus facility or department matched your filter criteria. Try checking for keywords like "Library", "TT", "SJT", "Hostel", or reset filters.
          </p>
          <button 
            type="button" 
            className="btn-reset-filters"
            onClick={onResetFilters}
          >
            <Icon name="RefreshCw" size={15} />
            <span>Reset Search & Filters</span>
          </button>
        </div>
      ) : (
        <div className="cards-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedService?.id === service.id}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      )}
    </section>
  );
};
