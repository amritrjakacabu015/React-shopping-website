import React, { Component } from "react";
import Counter from "./counter";

class AddCounter extends Component {
  state = {
    counters: [
      { _id: 0, count: 1 },
      { _id: 1, count: 3 },
      { _id: 2, count: 4 },
      { _id: 3, count: 6 },
      { _id: 4, count: 10 }
    ]
  };

  handleReset() {
    const counters = this.state.counters.map(c => {
      c.count = 1;
      return c;
    });
    this.setState({ counters });
  }

  handleDecrement = counter => {
    if (counter.count > 1) {
      const counters = [...this.state.counters];
      const index = this.state.counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].count--;
      this.setState({ counters });
    }
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].count++;
    this.setState({ counters });
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
          onClick={() => this.handleReset()}
          className="btn btn-primary btn-bg "
        >
          Reset
        </button>

        <button
          onClick={() => this.handleRemoveAllItems()}
          className="btn btn-danger btn-bg m-3"
        >
          Remove All
        </button>
        {this.state.counters.map(c => (
          <Counter
            key={c._id}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            counter={c}
          />
        ))}
      </div>
    );
  }
}

export default AddCounter;
