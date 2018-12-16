import React, { Component } from "react";
import AddCounter from "./addCounter";
import Navigation from "./navigation";

class Background extends Component {
  state = {
    counters: [
      { _id: 0, count: 1 },
      { _id: 1, count: 3 },
      { _id: 2, count: 4 },
      { _id: 3, count: 6 },
      { _id: 4, count: 10 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.count = 1;
      return c;
    });
    this.setState({ counters });
  };

  handleRemoveAllItems = () => {
    this.setState({ counters: [] });
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
          <h1>Shopping Website Test</h1>
          <AddCounter
            onReset={this.handleReset}
            onRemoveAllItems={this.handleRemoveAllItems}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </center>
      </div>
    );
  }
}

export default Background;
