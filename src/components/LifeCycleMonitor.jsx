// src/components/LifeCycleMonitor.jsx
import React, { Component } from "react";
import "./LifeCycleMonitor.css";

class LifeCycleMonitor extends Component {
  constructor(props) {
    super(props);
    this.state = { logs: [], renderCount: 0 };
    this.log = this.log.bind(this);
  }

  log(message) {
    this.setState((prev) => ({
      logs: [...prev.logs, `${new Date().toLocaleTimeString()} - ${message}`],
      renderCount: prev.renderCount + 1,
    }));
  }

  componentDidMount() {
    this.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    // Log without causing state updates to avoid infinite re-renders
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    this.log("componentWillUnmount");
  }

  forceRefresh = () => {
    this.forceUpdate();
    this.log("forceUpdate called");
  };

  render() {
    // Removed state update from render to avoid infinite loop
    return (
      <div className="lifecycle-monitor">
        <h3>Lifecycle Monitor (Class Component)</h3>
        <button onClick={this.forceRefresh}>Force Update</button>
        <p>Render count: {this.state.renderCount}</p>
        <ul>
          {this.state.logs.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LifeCycleMonitor;
