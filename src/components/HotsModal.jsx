// src/components/HotsModal.jsx
import React from "react";
import "./HotsModal.css";

function HotsModal({ onClose }) {
  return (
    <div className="modal overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <div className="modal__badge">MODULE 6 – HOTS DESIGN ANALYSIS</div>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">✕</button>
        </div>

        <h2 className="modal__title">Scalability Justification: 5 to 50 Campus Services</h2>

        <div className="hots__question-box">
          <strong>Question:</strong> Suppose the Campus Assistance Hub is expanded from 5 services to 50 services. Analyze how your component design would affect code reusability, duplication, and maintainability. Identify one important component-design decision made in your application and justify why it would remain useful as the application grows.
        </div>

        <div className="hots__section">
          <h3>1. Impact on Reusability, Duplication & Maintainability</h3>
          <ul className="hots__points">
            <li>
              <strong>100% Component Reusability (Zero JSX Duplication):</strong> Rather than hardcoding separate HTML cards for each service, the system encapsulates all layout, styling, badges, and click triggers in a single, reusable <code>&lt;ServiceCard /&gt;</code> component. Whether rendering 5 or 50 services, React maps over the dataset dynamically:
              <pre className="code-snippet">{"{services.map(s => <ServiceCard key={s.id} service={s} onSelect={onSelect} />)}"}</pre>
            </li>
            <li>
              <strong>Decoupled Data Architecture ($O(1)$ Code Overhead):</strong> Expanding to 50 services requires adding records strictly to <code>src/data/services.js</code> (or fetching from a REST API). Zero component modifications or JSX rewrites are needed.
            </li>
            <li>
              <strong>Centralized Maintainability ($O(1)$ Modification Cost):</strong> If card styling, hover effects, or accessibility tags need updates, modifying <code>ServiceCard.jsx</code> immediately updates all 50 rendered cards uniformly across the entire application.
            </li>
          </ul>
        </div>

        <div className="hots__section">
          <h3>2. Key Component-Design Decision: Decoupled State Container Architecture</h3>
          <p>
            The central architectural decision was <strong>lifting state up to a top-level orchestrator (<code>App.jsx</code>) while maintaining presentational purity in card components</strong>:
          </p>
          <ul className="hots__points">
            <li>
              <strong>Single Source of Truth:</strong> Dynamic filtering, search querying, and active modal selection are managed cleanly without prop drilling.
            </li>
            <li>
              <strong>Virtualization & Pagination Ready:</strong> As the catalog expands to 50+ services, a virtualization window (e.g. <code>react-window</code>) or paginated chunking can be dropped inside <code>ServiceGrid</code> without modifying the card component contract.
            </li>
            <li>
              <strong>Predictable Life Cycle Hooks:</strong> Selected services trigger <code>componentDidUpdate()</code> in the telemetry monitor cleanly, allowing audit trails, analytics, and dynamic DOM title updates.
            </li>
          </ul>
        </div>

        <div className="hots__table-wrap">
          <table className="hots__table">
            <thead>
              <tr>
                <th>Dimension</th>
                <th>5 Services (Baseline)</th>
                <th>50 Services (Scaled)</th>
                <th>Architectural Justification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Component Instances</strong></td>
                <td>1 Reusable Card Definition</td>
                <td>1 Reusable Card Definition</td>
                <td>Zero code duplication; 100% component reuse</td>
              </tr>
              <tr>
                <td><strong>Maintenance Cost</strong></td>
                <td>Low</td>
                <td>$O(1)$ Complexity</td>
                <td>Only the JSON/data array expands</td>
              </tr>
              <tr>
                <td><strong>Filter & Search Logic</strong></td>
                <td>Client array filter</td>
                <td>Memoized / Paginated filter</td>
                <td>Zero lag; scalable single-page UX</td>
              </tr>
              <tr>
                <td><strong>Data Integration</strong></td>
                <td>Static array in <code>services.js</code></td>
                <td>Direct REST / GraphQL API</td>
                <td>Seamless transition to cloud database</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="modal__footer">
          <span className="student-signature">Student: AJAY BERLIN (24BCE0449) – VIT Vellore</span>
          <button className="action-btn call-btn" onClick={onClose}>Close Analysis</button>
        </div>
      </div>
    </div>
  );
}

export default HotsModal;
