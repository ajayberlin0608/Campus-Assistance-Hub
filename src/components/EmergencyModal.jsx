import React from 'react';
import { Icon } from './Icons';
import { EMERGENCY_CONTACTS } from '../data/services';

/**
 * EmergencyModal Component
 * 24/7 University Emergency Directory for VIT Vellore
 * Matches the priority helplines design in sample PDF page 7.
 */
export const EmergencyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container emergency-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header emergency-header">
          <div>
            <span className="emergency-alert-tag">PRIORITY HELPLINES</span>
            <h2 className="modal-heading emergency-heading">
              <Icon name="ShieldAlert" size={24} />
              <span>VIT Vellore 24/7 Emergency Directory</span>
            </h2>
          </div>
          <button 
            type="button" 
            className="modal-close-btn light"
            onClick={onClose}
            aria-label="Close emergency modal"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="modal-body-scrollable">
          <div className="emergency-notice-card">
            <Icon name="AlertTriangle" size={20} className="notice-icon" />
            <p>
              For life-threatening medical emergencies or campus-wide security situations, dial the Central Command Center or Health Centre immediately.
            </p>
          </div>

          <div className="emergency-contacts-list">
            {EMERGENCY_CONTACTS.map((item, idx) => (
              <div key={idx} className={`emergency-contact-card ${item.critical ? 'critical' : ''}`}>
                <div className="contact-info-block">
                  <h4 className="contact-title">{item.name}</h4>
                  <p className="contact-dept">{item.department} • {item.tag}</p>
                </div>
                <a 
                  href={`tel:${item.number.replace(/[^0-9+]/g, '')}`}
                  className="btn-call-emergency"
                  title={`Dial ${item.number}`}
                >
                  <Icon name="Phone" size={15} />
                  <span>{item.number}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <span className="footer-credits">VIT Vellore Campus Security & Medical Emergency Desk</span>
          <button 
            type="button" 
            className="btn-modal-close"
            onClick={onClose}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
