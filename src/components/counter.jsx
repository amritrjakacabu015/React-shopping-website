import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    items: [
      {
        _id: 1,
        name: "Item 1"
      },
      {
        _id: 2,
        name: "Item 2"
      },
      {
        _id: 3,
        name: "Item 3"
      },
      {
        _id: 4,
        name: "Item 4"
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <h1>Shopping Website Test</h1>

        <button onClick={this.handleaddItem} className="btn btn-primary btn-bg">
          Add New Item
        </button>

        {this.getItems()}
      </React.Fragment>
    );
  }

  handleaddItem = () => {
    if (this.state.items.length === 0) return <li>Item added</li>;
    this.setState({ items: [...this.state.items, { _id: 5, name: "Item 5" }] });
  };

  handleDecrement = () => {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  getItems() {
    if (this.state.items.length === 0) return "There are no items in your Cart";
    return (
      <ul>
        {this.state.items.map(tag => (
          <li key={tag._id}>
            {tag.name}{" "}
            <button
              onClick={this.handleDecrement}
              className="btn btn-secondary btn-sm m-2"
            >
              -
            </button>
            <span className="badge m-3 badge-secondary">
              {this.state.count}
            </span>
            <button
              onClick={this.handleIncrement}
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Counter;
