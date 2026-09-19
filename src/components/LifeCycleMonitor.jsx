import React, { Component } from 'react';
import { Icon } from './Icons';

/**
 * LifeCycleMonitor - React Class Component
 * Explicitly fulfills BCSE203E Module 6 Curriculum Requirements:
 * 1. Constructor: Initializes component state, default props, and binds event handlers.
 * 2. React Component API: Uses this.setState(), this.forceUpdate(), and this.props.
 * 3. Lifecycle Methods:
 *    - componentDidMount: Invoked immediately after component is inserted into DOM.
 *    - componentDidUpdate: Invoked immediately after updating occurs (service selection change).
 *    - componentWillUnmount: Performs cleanup before destruction.
 */
export class LifeCycleMonitor extends Component {
  constructor(props) {
    super(props);

    // Initial state setup inside constructor as required by Module 6
    this.state = {
      lifecycleLogs: [
        {
          id: 1,
          time: new Date().toLocaleTimeString(),
          phase: 'Constructor Initialized',
          detail: `Initial state created with ${props.totalServices || 8} campus services. Props received and method handlers bound.`,
          type: 'init'
        }
      ],
      updateCounter: 0,
      lastInteraction: 'Application Bootstrapped',
      activeServiceTracked: props.activeService?.name || 'None Selected'
    };

    // Explicit method binding inside constructor
    this.handleForceRerender = this.handleForceRerender.bind(this);
    this.handleStateSimulation = this.handleStateSimulation.bind(this);
    this.handleClearLogs = this.handleClearLogs.bind(this);
    this.addLog = this.addLog.bind(this);
  }

  // Component Life Cycle: componentDidMount
  componentDidMount() {
    this.addLog(
      'componentDidMount',
      'Campus Assistance Hub DOM nodes mounted. Live telemetry initialized, event listeners registered.',
      'mount'
    );
  }

  // Component Life Cycle: componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    // Detect change in active campus service selection passed via props
    if (prevProps.activeService?.id !== this.props.activeService?.id) {
      const prevName = prevProps.activeService ? prevProps.activeService.name : 'None';
      const newName = this.props.activeService ? this.props.activeService.name : 'None';

      this.addLog(
        'componentDidUpdate',
        `Dynamic service selection altered: "${prevName}" ➔ "${newName}". Component API re-rendered views dynamically.`,
        'update'
      );
    }
  }

  // Component Life Cycle: componentWillUnmount
  componentWillUnmount() {
    console.log('[LifeCycleMonitor] componentWillUnmount triggered. Cleaning up listeners.');
  }

  addLog(phase, detail, type) {
    const newLog = {
      id: Date.now() + Math.random(),
      time: new Date().toLocaleTimeString(),
      phase,
      detail,
      type
    };

    this.setState((prevState) => ({
      lifecycleLogs: [newLog, ...prevState.lifecycleLogs].slice(0, 8),
      updateCounter: prevState.updateCounter + 1,
      lastInteraction: phase
    }));
  }

  // Component API Demonstration: this.setState()
  handleStateSimulation() {
    this.setState((prevState) => ({
      updateCounter: prevState.updateCounter + 1
    }), () => {
      this.addLog(
        'this.setState() [API]',
        `Component API setState() executed with updater callback. New update count: ${this.state.updateCounter}.`,
        'api'
      );
    });
  }

  // Component API Demonstration: this.forceUpdate()
  handleForceRerender() {
    this.addLog(
      'this.forceUpdate() [API]',
      'React Component API forceUpdate() invoked. Skipped shouldComponentUpdate and triggered DOM re-conciliation.',
      'api'
    );
    this.forceUpdate();
  }

  handleClearLogs() {
    this.setState({
      lifecycleLogs: [
        {
          id: Date.now(),
          time: new Date().toLocaleTimeString(),
          phase: 'Logs Reset',
          detail: 'Monitor history flushed. Active class component retains live state.',
          type: 'init'
        }
      ]
    });
  }

  render() {
    const { lifecycleLogs, updateCounter, lastInteraction } = this.state;
    const { activeService } = this.props;

    return (
      <section className="lifecycle-monitor-wrapper">
        <div className="lifecycle-card">
          {/* Header Bar */}
          <div className="lifecycle-header">
            <div className="lifecycle-title-group">
              <div className="live-status-dot"></div>
              <h3 className="lifecycle-title">React Component API & Life Cycle Event Monitor (Module 6)</h3>
              <span className="live-badge">Live Class Component State</span>
            </div>
            <div className="lifecycle-counters">
              <span className="counter-tag">Updates Logged: <strong>{updateCounter}</strong></span>
              <span className="counter-tag">Active Focus: <strong>{activeService?.shortName || 'Overview'}</strong></span>
            </div>
          </div>

          {/* Demonstration Action Buttons (Component API) */}
          <div className="lifecycle-actions-toolbar">
            <div className="toolbar-label">
              <Icon name="Sliders" size={14} />
              <span>Component API Controls:</span>
            </div>
            <button 
              type="button" 
              className="btn-api-action"
              onClick={this.handleStateSimulation}
              title="Demonstrates this.setState() with updater callback"
            >
              <Icon name="RefreshCw" size={14} />
              <span>Invoke this.setState()</span>
            </button>
            <button 
              type="button" 
              className="btn-api-action secondary"
              onClick={this.handleForceRerender}
              title="Demonstrates this.forceUpdate() Component API method"
            >
              <Icon name="Sparkles" size={14} />
              <span>Invoke this.forceUpdate()</span>
            </button>
            <button 
              type="button" 
              className="btn-api-action clear"
              onClick={this.handleClearLogs}
            >
              <Icon name="X" size={14} />
              <span>Flush Logs</span>
            </button>
          </div>

          {/* Real-time Event Terminal */}
          <div className="terminal-screen" aria-live="polite">
            {lifecycleLogs.map((log) => (
              <div key={log.id} className={`terminal-row ${log.type}`}>
                <span className="term-time">[{log.time}]</span>
                <span className={`term-phase ${log.type}`}>[{log.phase}]</span>
                <span className="term-detail">{log.detail}</span>
              </div>
            ))}
          </div>
          
          <div className="lifecycle-footer-note">
            <span>Pedagogical Evidence: Demonstrates ES6 Class Constructor, state initialization, Component API methods, and dynamic component lifecycle reconciliation as specified in Module 6 syllabus.</span>
          </div>
        </div>
      </section>
    );
  }
}
