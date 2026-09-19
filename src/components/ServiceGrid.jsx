// src/components/ServiceGrid.jsx
import React, { useState } from "react";
import ServiceCard from "./ServiceCard.jsx";
import "./ServiceGrid.css";

function ServiceGrid({ services, onSelect }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(services.map((s) => s.category))];

  const filtered = services.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase()) ||
      s.location.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || s.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="service-grid">
      <div className="service-grid__header-wrap">
        <div className="service-grid__title-group">
          <h2 className="service-grid__heading">Campus Services Directory</h2>
          <p className="service-grid__subheading">
            Select any campus service card below to dynamically view comprehensive operational details in the SPA inspection panel.
          </p>
        </div>

        <div className="service-grid__count-badge">
          <span>{filtered.length}</span> of <span>{services.length}</span> Services Available
        </div>
      </div>

      <div className="service-grid__controls">
        <div className="search-box-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by facility name, block, or keywords..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="service-grid__search"
          />
          {search && (
            <button className="search-clear-btn" onClick={() => setSearch("")}>✕</button>
          )}
        </div>

        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-pill ${category === cat ? "active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="service-grid__cards">
        {filtered.length > 0 ? (
          filtered.map((service) => (
            <ServiceCard key={service.id} service={service} onSelect={onSelect} />
          ))
        ) : (
          <div className="service-grid__empty">
            <div className="empty-icon">🔎</div>
            <h3>No matching campus services found</h3>
            <p>Try refining your search keyword or selecting "All" categories.</p>
            <button
              className="reset-btn"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ServiceGrid;
