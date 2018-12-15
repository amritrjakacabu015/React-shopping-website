import React, { Component } from "react";

class Counter extends Component {
  state = {
    totalItems: 0,
    items: []
  };

  render() {
    return (
      <React.Fragment>
        <h1>Shopping Website Test</h1>

        <button
          onClick={() => this.handleAddItem()}
          className="btn btn-success btn-bg"
        >
          Add New Item
        </button>

        <button
          onClick={() => this.handleRemoveAllItems()}
          className="btn btn-danger btn-bg m-3"
        >
          Remove All
        </button>

        {this.getItems()}
      </React.Fragment>
    );
  }

  handleAddItem() {
    const newItem = {
      _id: this.state.totalItems + 1,
      name: "Item " + this.state.totalItems,
      count: 1
    };
    this.setState({
      totalItems: this.state.totalItems + 1,
      items: [...this.state.items, newItem]
    });
  }

  handleRemoveAllItems() {
    this.setState({ totalItems: 0, items: [] });
  }

  handleRemoveItem(item) {
    if (this.state.items.length !== 0) {
      const itemsAfterDeletion = this.state.items.filter(
        i => i._id !== item._id
      );
      this.setState({ items: [...itemsAfterDeletion] });
    }
  }

  handleDecrement(item) {
    if (item.count > 1) {
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
    if (this.state.items.length === 0) {
      return <p>There are no items in your Cart</p>;
    }
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
            <button
              onClick={() => this.handleRemoveItem(item)}
              className="btn btn-warning btn-sm m-2"
            >
              Remove Item
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Counter;
