import React, { useState, useMemo } from 'react';
import { CAMPUS_SERVICES } from './data/services';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceGrid } from './components/ServiceGrid';
import { ServiceDetails } from './components/ServiceDetails';
import { LifeCycleMonitor } from './components/LifeCycleMonitor';
import { EmergencyModal } from './components/EmergencyModal';
import { HotsModal } from './components/HotsModal';
import { Footer } from './components/Footer';
import './App.css';

/**
 * Main Application Component: Campus Assistance Hub
 * Student: Ajay Berlin (Reg No: 24BCE0449)
 * Course: BCSE203E – Web Programming | Assignment 7
 * Faculty: Nihaal Ahmed.K | Slot: L31 + L32 + L51 + L52
 * 
 * Component Hierarchy:
 * App
 * ├── Header
 * ├── Hero
 * ├── ServiceGrid
 * │   └── ServiceCard (Reusable)
 * ├── ServiceDetails (Dynamic SPA view)
 * ├── LifeCycleMonitor (Class Component with Constructor & Lifecycle Methods)
 * ├── EmergencyModal
 * ├── HotsModal
 * └── Footer
 */
function App() {
  const [services] = useState(CAMPUS_SERVICES);
  const [selectedService, setSelectedService] = useState(CAMPUS_SERVICES[0]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isHotsOpen, setIsHotsOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  // Compute unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(CAMPUS_SERVICES.map((s) => s.category))];
    return cats;
  }, []);

  // Compute category counts for badges
  const categoryCounts = useMemo(() => {
    const counts = { All: CAMPUS_SERVICES.length };
    CAMPUS_SERVICES.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter services based on category and search query
  const filteredServices = useMemo(() => {
    return services.filter((s) => {
      const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesQuery = 
        s.name.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.location.toLowerCase().includes(query) ||
        s.badge.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [services, selectedCategory, searchQuery]);

  const handleSelectService = (service) => {
    setSelectedService(service);
    // Smooth scroll down to details on mobile/tablet view
    const detailsElem = document.getElementById('service-details-anchor');
    if (detailsElem && window.innerWidth < 1024) {
      detailsElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="app-layout">
      {/* Header with Branding, Live Clock, Ticker & Modal Triggers */}
      <Header 
        onOpenHots={() => setIsHotsOpen(true)}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
      />

      {/* Main Content Area */}
      <main className="main-content-container">
        {/* Hero Section with Search and Category Filtering */}
        <Hero 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categories={categories}
          categoryCounts={categoryCounts}
        />

        {/* Dynamic Campus Service Grid */}
        <ServiceGrid 
          services={filteredServices}
          totalCount={services.length}
          selectedService={selectedService}
          onSelectService={handleSelectService}
          onResetFilters={handleResetFilters}
        />

        {/* Dynamic Service Details Section (Updates without page reload) */}
        <ServiceDetails 
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />

        {/* Module 6 Class Component with Constructor & Lifecycle Demonstrator */}
        <LifeCycleMonitor 
          activeService={selectedService}
          totalServices={services.length}
        />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Modals */}
      <HotsModal 
        isOpen={isHotsOpen}
        onClose={() => setIsHotsOpen(false)}
      />

      <EmergencyModal 
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />
    </div>
  );
}

export default App;
