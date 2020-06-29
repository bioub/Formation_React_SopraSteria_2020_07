import React, { Component } from 'react';

class CounterV1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 1,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  increment() {
    console.log('increment');
    const { count, step } = this.state;
    this.setState({ count: count + step });
  }
  decrement() {
    console.log('decrement');
    const { count, step } = this.state;
    this.setState({ count: count - step });
  }
  handleChange() {
    console.log('handleChange');
  }
  render() {
    const { count, step } = this.state;
    return (
      <div className="CounterV1">
        <div>
          Step : <input type="number" value={step} onChange={this.handleChange} />
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
        <div>Count : {count}</div>
      </div>
    );
  }
}

export default CounterV1;
