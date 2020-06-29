import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      now: new Date(),
    };
    setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }
  render() {
    const { now } = this.state;
    return <div className="Clock">{now.toLocaleTimeString()}</div>;
  }
}

export default Clock;
