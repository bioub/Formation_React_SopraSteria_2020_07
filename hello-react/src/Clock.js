import React, { Component } from 'react';
import { format as formatDate } from 'date-fns'; 

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      now: new Date(),
    };
  }
  componentDidMount() {
    const { delay = 1000 } = this.props;
    this._interval = setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, delay);
  }
  componentDidUpdate() {
    const { delay = 1000 } = this.props;
    clearInterval(this._interval);
    this._interval = setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, delay);
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  render() {
    const { now } = this.state;
    const { format = 'HH:mm:ss' } = this.props;
    return <div className="Clock">{formatDate(now, format)}</div>;
  }
}

export default Clock;
