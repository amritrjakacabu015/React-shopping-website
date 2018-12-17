import React, { Component } from "react";
import AddCounter from "./addCounter";
import Navigation from "./navigation";

class Background extends Component {
  state = {
    totalCounters: 0,
    counters: []
  };

  handleAddCounter = () => {
    const counter = { _id: this.state.totalCounters + 1, count: 1 };
    this.setState({
      totalCounters: this.state.totalCounters + 1,
      counters: [...this.state.counters, counter]
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.count = 1;
      return c;
    });
    this.setState({ counters });
  };

  handleRemoveAllItems = () => {
    this.setState({ totalCounters: 0, counters: [] });
  };

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

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter._id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <center>
          <Navigation
            countTotal={
              this.state.counters.filter(counter => counter.count > 0).length
            }
          />

          <h1 className="m-3">Shopping Website Test</h1>

          <button
            onClick={this.handleAddCounter}
            className="btn btn-warning btm-bg m-3"
          >
            Add Counter
          </button>
          {this.state.counters.length === 0 && <p>Your cart is empty</p>}
          {this.state.counters.length !== 0 && (
            <AddCounter
              onReset={this.handleReset}
              onRemoveAllItems={this.handleRemoveAllItems}
              onDelete={this.handleDelete}
              onDecrement={this.handleDecrement}
              onIncrement={this.handleIncrement}
              counters={this.state.counters}
            />
          )}
        </center>
      </div>
    );
  }
}

export default Background;
