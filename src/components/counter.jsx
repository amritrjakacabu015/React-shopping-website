import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    items: ["Item 1", "Item 2", "Item 3"]
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Shopping Website Test</h1>

        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>

        <span className={this.getSpanClass()}>{this.checkCount()}</span>

        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>

        {this.getItems()}
      </React.Fragment>
    );
  }

  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  getItems() {
    if (this.state.items.length === 0) return "There are no items in your Cart";

    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  getSpanClass() {
    let classes = "badge m-3 badge-";
    classes += this.state.count > 0 ? "primary" : "secondary";
    return classes;
  }

  checkCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
