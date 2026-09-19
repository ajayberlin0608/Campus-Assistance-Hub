import React from 'react';
import { Icon } from './Icons';

/**
 * HotsModal Component
 * Interactive modal presenting the Higher-Order Thinking Skills (HOTS)
 * architectural justification as required by the Assignment 7 question paper.
 */
export const HotsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container hots-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-badge-group">
            <span className="modal-category-badge">HOTS / DESIGN ANALYSIS</span>
            <h2 className="modal-heading">
              <Icon name="Sparkles" size={22} />
              <span>Higher-Order Thinking Skills (HOTS) Justification</span>
            </h2>
            <p className="modal-subheading">
              Architectural Evaluation: Scaling Campus Assistance Hub from 5 to 50 Services
            </p>
          </div>
          <button 
            type="button" 
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close HOTS modal"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body-scrollable">
          {/* Question Prompt Callout */}
          <div className="hots-prompt-callout">
            <strong>HOTS Prompt:</strong> 
            <em>"Suppose the Campus Assistance Hub is expanded from 5 services to 50 services. Analyze how your component design would affect code reusability, duplication, and maintainability. Identify one important component-design decision made in your application and justify why it would remain useful as the application grows."</em>
          </div>

          {/* Section 1: Impact on Reusability, Duplication, Maintainability */}
          <div className="hots-section">
            <h3 className="hots-section-title">
              <span className="section-number">1</span>
              <span>Impact on Code Reusability, Duplication, and Maintainability</span>
            </h3>
            
            <p className="hots-paragraph">
              When scaling the Campus Assistance Hub from 5 to 50 services (e.g., adding Departmental Labs, Hostel Wardens per block, Sports Facilities, Placements & PAT, Scholarship Counters, COE Examination section):
            </p>

            <div className="hots-points-list">
              <div className="hots-point-item">
                <div className="point-badge">Zero Code Duplication</div>
                <p>
                  In our architecture, the service card structure is never hardcoded. Whether there are 5 or 50 services, exactly one reusable <code>&lt;ServiceCard /&gt;</code> component and one reusable <code>&lt;ServiceDetails /&gt;</code> component exist. All 50 services are rendered via high-order array mapping over normalized data items.
                </p>
              </div>

              <div className="hots-point-item">
                <div className="point-badge">Data-Driven Decoupling</div>
                <p>
                  Adding 45 new services requires updating only the data model schema (or receiving a JSON response from a REST/GraphQL API) in <code>services.js</code>. The React component hierarchy remains completely untouched, achieving 100% separation of content and presentation.
                </p>
              </div>

              <div className="hots-point-item">
                <div className="point-badge">High Maintainability</div>
                <p>
                  Any UI bug fix, design update (such as typography, badges, or button interaction), or accessibility improvement made to <code>ServiceCard.jsx</code> automatically propagates across all 50 service cards instantaneously.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Important Component-Design Decision */}
          <div className="hots-section">
            <h3 className="hots-section-title">
              <span className="section-number">2</span>
              <span>Key Architectural Decision: Component API & State Decoupling</span>
            </h3>
            
            <p className="hots-paragraph">
              The primary architectural decision was to establish a <strong>Strict Separation between Presentational Components (Dumb/Stateless) and Stateful Hub Orchestration</strong>:
            </p>

            <ul className="hots-bullets">
              <li>
                <strong>Global Dynamic Cohesion:</strong> When the user enters a search query or selects a category among 50 services, the top-level container computes the filtered subset once. Both the category count badges in <code>Hero</code> and the grid in <code>ServiceGrid</code> immediately reflect consistent state without prop-drilling desynchronization.
              </li>
              <li>
                <strong>Seamless Transition to Virtualization / Pagination:</strong> With 50+ services, a virtualization window (e.g., <code>react-window</code>) or pagination slice can be introduced inside <code>ServiceGrid</code> without altering the interface of individual <code>ServiceCard</code> components.
              </li>
              <li>
                <strong>Memory & Lifecycle Efficiency:</strong> Utilizing React's lifecycle (<code>componentDidUpdate</code>) to update document titles and search indices ensures operations occur predictably without redundant renders.
              </li>
            </ul>
          </div>

          {/* Section 3: Summary Matrix */}
          <div className="hots-section">
            <h3 className="hots-section-title">
              <span className="section-number">3</span>
              <span>Summary Matrix (5 vs. 50 Services)</span>
            </h3>

            <div className="table-responsive">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>5 Services (Baseline)</th>
                    <th>50 Services (Scaled)</th>
                    <th>Architectural Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Component Instances</strong></td>
                    <td>1 Reusable Card Definition</td>
                    <td>1 Reusable Card Definition (Unchanged)</td>
                    <td>100% Code Reusability</td>
                  </tr>
                  <tr>
                    <td><strong>Maintenance Overhead</strong></td>
                    <td>Low</td>
                    <td>O(1) – Only data array grows</td>
                    <td>No UI refactoring required</td>
                  </tr>
                  <tr>
                    <td><strong>Filtering Performance</strong></td>
                    <td>Instant client-side filter</td>
                    <td>Optimized linear search / memoized in Hub state</td>
                    <td>Predictable sub-millisecond search</td>
                  </tr>
                  <tr>
                    <td><strong>API Integration Readiness</strong></td>
                    <td>Mock Array in <code>services.js</code></td>
                    <td>Plug-and-play fetch from backend endpoint</td>
                    <td>Ready for enterprise production</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <span className="footer-credits">BCSE203E Module 6 Evaluation • Student: Ajay Berlin (24BCE0449) • Faculty: Nihaal Ahmed.K</span>
          <button 
            type="button" 
            className="btn-modal-close"
            onClick={onClose}
          >
            Close Analysis
          </button>
        </div>
      </div>
    </div>
  );
};
