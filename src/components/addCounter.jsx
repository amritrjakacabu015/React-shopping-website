import React, { Component } from "react";
import Counter from "./counter";

class AddCounter extends Component {
  state = {
    counters: [{ _id: 0 }, { _id: 1 }, { _id: 2 }, { _id: 3 }, { _id: 4 }]
  };

  handleRemoveAllItems() {
    this.setState({ totalCounters: 0, counters: [] });
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter._id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.handleRemoveAllItems()}
          className="btn btn-danger btn-bg m-3"
        >
          Remove All
        </button>
        {this.state.counters.map(c => (
          <Counter key={c._id} onDelete={this.handleDelete} counter={c} />
        ))}
      </div>
    );
  }
}

export default AddCounter;
