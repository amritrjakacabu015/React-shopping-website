import React, { Component } from "react";

class Counter extends Component {
  state = {
    items: [
      {
        _id: 1,
        name: "Item 1",
        count: 0
      },
      {
        _id: 2,
        name: "Item 2",
        count: 0
      },
      {
        _id: 3,
        name: "Item 3",
        count: 0
      },
      {
        _id: 4,
        name: "Item 4",
        count: 0
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
    this.setState({
      items: [...this.state.items, { _id: 5, name: "Item 5", count: 0 }]
    });
  };

  handleDecrement(item) {
    if (item.count > 0) {
      --item.count;
      const newItems = this.state.items.filter(i => {
        return i._id !== item._id ? i : item;
      });

      this.setState({ items: [...newItems] });
    }
  }

  handleIncrement(item) {
    ++item.count;
    const newItems = this.state.items.filter(i => {
      return i._id !== item._id ? i : item;
    });

    this.setState({ items: [...newItems] });
  }

  getItems() {
    if (this.state.items.length === 0) return "There are no items in your Cart";
    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item._id}>
            {item.name}{" "}
            <button
              onClick={() => this.handleDecrement(item)}
              className="btn btn-secondary btn-sm m-2"
            >
              -
            </button>
            <span className="badge m-3 badge-secondary">{item.count}</span>
            <button
              onClick={() => this.handleIncrement(item)}
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
