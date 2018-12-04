import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <React.Fragment>
        <h1>Shopping Website Test</h1>
        <span>{this.checkCount()}</span>
      </React.Fragment>
    );
  }

  checkCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
