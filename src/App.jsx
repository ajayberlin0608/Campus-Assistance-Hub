// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ServiceGrid from "./components/ServiceGrid.jsx";
import ServiceDetails from "./components/ServiceDetails.jsx";
import LifeCycleMonitor from "./components/LifeCycleMonitor.jsx";
import HotsModal from "./components/HotsModal.jsx";
import EmergencyModal from "./components/EmergencyModal.jsx";
import Footer from "./components/Footer.jsx";
import services from "./data/services.js";
import "./App.css";

function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [showHots, setShowHots] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);

  const handleSelect = (service) => {
    setSelectedService(service);
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  return (
    <div className="app">
      <Header
        onShowHots={() => setShowHots(true)}
        onShowEmergency={() => setShowEmergency(true)}
      />

      <Hero />

      <main className="container">
        <ServiceGrid services={services} onSelect={handleSelect} />

        {/* Dynamic Single-Page Service Details Modal */}
        {selectedService && (
          <ServiceDetails
            service={selectedService}
            onClose={handleCloseDetails}
          />
        )}

        {/* Module 6 React Class Component with Lifecycle & Component API */}
        <LifeCycleMonitor
          activeService={selectedService}
          totalServices={services.length}
        />
      </main>

      <Footer />

      {/* HOTS Scalability Justification Modal */}
      {showHots && <HotsModal onClose={() => setShowHots(false)} />}

      {/* 24/7 Priority Emergency Directory Modal */}
      {showEmergency && <EmergencyModal onClose={() => setShowEmergency(false)} />}
    </div>
  );
}

export default App;
