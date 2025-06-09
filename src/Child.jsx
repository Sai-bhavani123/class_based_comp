import React from 'react';
import './Child.css'; 

class Child extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    if (this.state.count < 20) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="counter-box">
        <h1>Counter App</h1>
        <button onClick={this.handleIncrement} disabled={this.state.count === 20}>+</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleDecrement} disabled={this.state.count === 0}>-</button>
      </div>
    );
  }
}

export default Child;
