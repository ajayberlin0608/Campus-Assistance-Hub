// src/components/ServiceGrid.jsx
import React, { useState } from "react";
import ServiceCard from "./ServiceCard.jsx";
import "./ServiceGrid.css";

function ServiceGrid({ services, onSelect }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(services.map((s) => s.category))];

  const filtered = services.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || s.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="service-grid">
      <div className="service-grid__controls">
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="service-grid__search"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="service-grid__filter">
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="service-grid__cards">
        {filtered.length > 0 ? (
          filtered.map((service) => (
            <ServiceCard key={service.id} service={service} onSelect={onSelect} />
          ))
        ) : (
          <p className="service-grid__empty">No services match your criteria.</p>
        )}
      </div>
    </section>
  );
}

export default ServiceGrid;
