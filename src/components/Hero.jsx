import React from 'react';
import { Icon } from './Icons';
import { VIT_METRICS } from '../data/services';

export const Hero = ({ 
  searchQuery, 
  onSearchChange, 
  selectedCategory, 
  onSelectCategory, 
  categories,
  categoryCounts 
}) => {
  return (
    <section className="hero-container">
      {/* Campus Location Tag */}
      <div className="campus-location-pill">
        <Icon name="MapPin" size={14} />
        <span>Vellore Institute of Technology • Katpadi, Vellore – 632014</span>
      </div>

      {/* Main Title & Subtitle */}
      <h2 className="hero-title">Unified Campus Assistance Hub</h2>
      <p className="hero-subtitle">
        Welcome to the centralized student service portal for VIT Vellore. Effortlessly explore academic guidance, 
        library facilities, campus transport, residential wardens, healthcare, and IT support — all within 
        a unified interactive single-page interface.
      </p>

      {/* Interactive Search Bar */}
      <div className="search-box-wrapper">
        <div className="search-input-container">
          <Icon name="Search" size={18} className="search-icon" />
          <input 
            type="text"
            id="campus-search-input"
            className="search-input"
            placeholder="Search campus services, buildings (TT, SJT, Library, MH), or helplines..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button 
              type="button" 
              className="search-clear-btn"
              onClick={() => onSearchChange('')}
              title="Clear search"
            >
              <Icon name="X" size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Campus Quick Stats */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-number">8</div>
          <div className="metric-label">CORE DEPARTMENTS</div>
        </div>
        <div className="metric-card">
          <div className="metric-number">24/7</div>
          <div className="metric-label">EMERGENCY DESK</div>
        </div>
        <div className="metric-card">
          <div className="metric-number">40+</div>
          <div className="metric-label">CAMPUS BLOCKS</div>
        </div>
        <div className="metric-card">
          <div className="metric-number">100%</div>
          <div className="metric-label">SINGLE PAGE SPA</div>
        </div>
      </div>

      {/* Category Filter Navigation */}
      <div className="category-filter-section">
        <div className="category-filter-header">
          <h3 className="section-title">Explore Campus Services & Departments</h3>
          <span className="category-hint">Select any facility to dynamically view operating hours, official contacts, and live assistance desk.</span>
        </div>

        <div className="category-chips-list">
          {categories.map((cat) => {
            const count = categoryCounts[cat] || 0;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                className={`category-chip ${isActive ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat)}
              >
                <span>{cat}</span>
                <span className="chip-badge">{count}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
