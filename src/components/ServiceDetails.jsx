import React, { useState } from 'react';
import { Icon } from './Icons';

/**
 * ServiceDetails Component
 * Dynamically displays in-depth information for the active campus service
 * entirely within the Single Page Application without reloading or page switching.
 */
export const ServiceDetails = ({ service, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  if (!service) {
    return (
      <section className="service-details-container empty-selection">
        <div className="empty-details-notice">
          <Icon name="Sparkles" size={32} />
          <h3>Select a Campus Service Above</h3>
          <p>Click on any service card in the grid to view comprehensive department procedures, contact details, operating schedules, and facilities.</p>
        </div>
      </section>
    );
  }

  const handleCopyContact = () => {
    navigator.clipboard?.writeText(`${service.name} | Phone: ${service.phone} | Email: ${service.email} | Location: ${service.location}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAction = () => {
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 4000);
  };

  return (
    <section className="service-details-container" id="service-details-anchor">
      {/* Top Header Row */}
      <div className="details-header-card">
        <div className="details-header-left">
          <div className="details-icon-wrapper">
            <Icon name={service.icon} size={30} className="details-icon" />
          </div>
          <div>
            <div className="details-tags-row">
              <span className="details-category-pill">{service.category}</span>
              <span className="details-status-badge">{service.badge}</span>
              <span className="details-rating-badge">★ {service.rating}</span>
            </div>
            <h2 className="details-title">{service.name}</h2>
            <p className="details-officer">
              <strong>Supervising Official:</strong> {service.contactPerson}
            </p>
          </div>
        </div>

        <div className="details-header-right">
          <button 
            type="button" 
            className="details-close-btn"
            onClick={onClose}
            title="Close Details View"
          >
            <Icon name="X" size={18} />
          </button>
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="details-content-grid">
        {/* Left Column: Description & Facilities */}
        <div className="details-main-column">
          <div className="details-block">
            <h4 className="block-title">
              <Icon name="BookOpen" size={18} />
              <span>Service Overview & Scope</span>
            </h4>
            <p className="block-text">{service.description}</p>
          </div>

          <div className="details-block">
            <h4 className="block-title">
              <Icon name="CheckCircle" size={18} />
              <span>Key Facilities & Student Amenities</span>
            </h4>
            <ul className="facilities-checklist">
              {service.facilities.map((facility, idx) => (
                <li key={idx} className="facility-item">
                  <Icon name="CheckCircle" size={16} className="check-icon" />
                  <span>{facility}</span>
                </li>
              ))}
            </ul>
          </div>

          {service.faqs && (
            <div className="details-block">
              <h4 className="block-title">
                <Icon name="Sparkles" size={18} />
                <span>Frequently Asked Questions</span>
              </h4>
              <div className="faqs-list">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="faq-card">
                    <strong className="faq-question">Q: {faq.q}</strong>
                    <p className="faq-answer">A: {faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Key Logistics & Contact Card */}
        <div className="details-sidebar-column">
          <div className="contact-summary-card">
            <h4 className="sidebar-card-title">Campus Logistics & Contact</h4>

            <div className="logistics-item">
              <div className="logistics-icon-cell">
                <Icon name="MapPin" size={18} />
              </div>
              <div>
                <span className="logistics-label">Campus Location</span>
                <p className="logistics-value">{service.location}</p>
              </div>
            </div>

            <div className="logistics-item">
              <div className="logistics-icon-cell">
                <Icon name="Clock" size={18} />
              </div>
              <div>
                <span className="logistics-label">Operating Schedule</span>
                <p className="logistics-value">{service.operatingHours}</p>
              </div>
            </div>

            <div className="logistics-item">
              <div className="logistics-icon-cell">
                <Icon name="Mail" size={18} />
              </div>
              <div>
                <span className="logistics-label">Official Email</span>
                <a href={`mailto:${service.email}`} className="logistics-link">{service.email}</a>
              </div>
            </div>

            <div className="logistics-item">
              <div className="logistics-icon-cell">
                <Icon name="Phone" size={18} />
              </div>
              <div>
                <span className="logistics-label">Direct University Extension</span>
                <a href={`tel:${service.phone.replace(/[^0-9+]/g, '')}`} className="logistics-link highlight-phone">{service.phone}</a>
              </div>
            </div>

            {/* Quick Actions in Sidebar */}
            <div className="sidebar-actions-group">
              <button 
                type="button" 
                className="btn-primary-action"
                onClick={handleAction}
              >
                <Icon name="Sparkles" size={16} />
                <span>{service.quickAction || "Initiate Department Assistance"}</span>
              </button>

              <button 
                type="button" 
                className="btn-secondary-action"
                onClick={handleCopyContact}
              >
                <Icon name="CheckCircle" size={16} />
                <span>{copied ? "✓ Copied to Clipboard!" : "Copy Contact Details"}</span>
              </button>
            </div>

            {bookingSuccess && (
              <div className="toast-notification">
                <Icon name="CheckCircle" size={16} />
                <span>Request registered! Acknowledgment sent to student VTOP notification portal.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
