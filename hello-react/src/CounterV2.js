import React, { Component } from 'react';

class CounterV2 extends Component {
  state = {
    count: 0,
    step: 1,
  };
  increment = () => {
    console.log('increment');
    const { count, step } = this.state;
    this.setState({ count: count + step });
  }
  decrement = () => {
    console.log('decrement');
    const { count, step } = this.state;
    this.setState({ count: count - step });
  }
  handleChange = (event) => {
    console.log('handleChange');
    this.setState({
      step: Number(event.target.value)
    });
  }
  render() {
    const { count, step } = this.state;
    return (
      <div className="CounterV2">
        <div>
          Step : <input type="number" value={step} onChange={this.handleChange}  />
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
        <div>Count : {count}</div>
      </div>
    );
  }
}

export default CounterV2;
