// src/components/LifeCycleMonitor.jsx
import React, { Component } from "react";
import "./LifeCycleMonitor.css";

/**
 * Module 6: ReactJS Concepts Implementation
 * - ES6 Class Component with constructor(props) & super(props)
 * - State initialization in constructor
 * - React Component Life Cycle methods: componentDidMount, componentDidUpdate, componentWillUnmount
 * - React Component API: this.setState(), this.forceUpdate(), this.props, this.state
 */
class LifeCycleMonitor extends Component {
  constructor(props) {
    super(props);
    
    // Explicit State Initialization via Constructor (Module 6 Requirement)
    this.state = {
      telemetryLogs: [
        `[${new Date().toLocaleTimeString()}] [CONSTRUCTOR] Initialized state: counter=0, status=READY`
      ],
      stateCounter: 0,
      monitorStatus: "ACTIVE",
      lastRenderTime: new Date().toLocaleTimeString()
    };

    // Method bindings in Constructor
    this.handleTriggerSetState = this.handleTriggerSetState.bind(this);
    this.handleTriggerForceUpdate = this.handleTriggerForceUpdate.bind(this);
    this.clearTelemetry = this.clearTelemetry.bind(this);
  }

  componentDidMount() {
    // Life Cycle Method: Initial mounting operation
    const time = new Date().toLocaleTimeString();
    this.setState((prevState) => ({
      telemetryLogs: [
        ...prevState.telemetryLogs,
        `[${time}] [LIFECYCLE: componentDidMount] Component mounted to DOM. Props received (totalServices: ${this.props.totalServices || 8})`
      ],
      monitorStatus: "MONITORING_ACTIVE"
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    // Life Cycle Method: Reacting to prop or state updates
    if (prevProps.activeService !== this.props.activeService) {
      const prevName = prevProps.activeService ? prevProps.activeService.name : "None";
      const currentName = this.props.activeService ? this.props.activeService.name : "None";
      const time = new Date().toLocaleTimeString();

      this.setState((prev) => ({
        telemetryLogs: [
          ...prev.telemetryLogs,
          `[${time}] [LIFECYCLE: componentDidUpdate] Active Service transitioned: "${prevName}" ➔ "${currentName}"`
        ],
        lastRenderTime: time
      }));
    }
  }

  componentWillUnmount() {
    console.log("[LIFECYCLE: componentWillUnmount] Component cleanup executing.");
  }

  // React Component API: this.setState() demonstration
  handleTriggerSetState() {
    const time = new Date().toLocaleTimeString();
    this.setState((prevState) => ({
      stateCounter: prevState.stateCounter + 1,
      telemetryLogs: [
        ...prevState.telemetryLogs,
        `[${time}] [COMPONENT API: this.setState()] State updated! Counter incremented to ${prevState.stateCounter + 1}`
      ],
      lastRenderTime: time
    }));
  }

  // React Component API: this.forceUpdate() demonstration
  handleTriggerForceUpdate() {
    const time = new Date().toLocaleTimeString();
    this.setState((prev) => ({
      telemetryLogs: [
        ...prev.telemetryLogs,
        `[${time}] [COMPONENT API: this.forceUpdate()] Bypassed shouldComponentUpdate & forced immediate re-render`
      ],
      lastRenderTime: time
    }), () => {
      this.forceUpdate();
    });
  }

  clearTelemetry() {
    this.setState({
      telemetryLogs: [
        `[${new Date().toLocaleTimeString()}] [TELEMETRY] Logs cleared by user.`
      ]
    });
  }

  render() {
    const { activeService, totalServices } = this.props;
    const { telemetryLogs, stateCounter, monitorStatus, lastRenderTime } = this.state;

    return (
      <section className="lifecycle-monitor" id="lifecycle-telemetry">
        <div className="lifecycle-monitor__header">
          <div className="lifecycle-monitor__title-area">
            <div className="status-indicator-dot"></div>
            <h3>React Component API & Life Cycle Event Monitor</h3>
            <span className="module-badge">Module 6 Requirement</span>
          </div>

          <div className="lifecycle-monitor__status-tag">
            STATUS: <strong>{monitorStatus}</strong>
          </div>
        </div>

        <p className="lifecycle-monitor__desc">
          Live telemetry demonstrating genuine React ES6 Class Component behavior, constructor initialization, props consumption, lifecycle hooks (<code>componentDidMount</code>, <code>componentDidUpdate</code>), and Component API methods (<code>this.setState</code>, <code>this.forceUpdate</code>).
        </p>

        <div className="lifecycle-monitor__metrics-grid">
          <div className="metric-box">
            <span className="metric-box__label">Active Service Prop</span>
            <span className="metric-box__value active-prop-name">
              {activeService ? activeService.name : "None (Select Card)"}
            </span>
          </div>

          <div className="metric-box">
            <span className="metric-box__label">Total Services Prop</span>
            <span className="metric-box__value">{totalServices || 8} Registered</span>
          </div>

          <div className="metric-box">
            <span className="metric-box__label">Internal State Counter</span>
            <span className="metric-box__value highlight-counter">{stateCounter}</span>
          </div>

          <div className="metric-box">
            <span className="metric-box__label">Last Render Timestamp</span>
            <span className="metric-box__value mono">{lastRenderTime}</span>
          </div>
        </div>

        <div className="lifecycle-monitor__controls">
          <button
            className="telemetry-btn api-setstate-btn"
            onClick={this.handleTriggerSetState}
            title="Invokes this.setState() to update state and trigger lifecycle"
          >
            ⚡ Trigger this.setState()
          </button>

          <button
            className="telemetry-btn api-forceupdate-btn"
            onClick={this.handleTriggerForceUpdate}
            title="Invokes this.forceUpdate() component API method"
          >
            🔄 Trigger this.forceUpdate()
          </button>

          <button
            className="telemetry-btn clear-btn"
            onClick={this.clearTelemetry}
          >
            🧹 Clear Event Stream
          </button>
        </div>

        <div className="lifecycle-terminal">
          <div className="lifecycle-terminal__topbar">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="terminal-title">Real-Time Component Life Cycle Log Stream</span>
            <span className="terminal-count">{telemetryLogs.length} Events Logged</span>
          </div>

          <div className="lifecycle-terminal__console">
            {telemetryLogs.map((log, index) => (
              <div key={index} className="log-line">
                <span className="log-index">&gt;</span>
                <span className="log-text">{log}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default LifeCycleMonitor;
