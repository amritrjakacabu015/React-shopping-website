import React, { Component } from "react";
import AddCounter from "./addCounter";
import Navigation from "./navigation";

class Background extends Component {
  state = {
    totalCounters: 0,
    counters: []
  };

  handleLike = counter => {
    const newCounter = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    newCounter[index].liked = !newCounter[index].liked;
    this.setState({ counters: [...newCounter] });
  };

  handleAddCounter = () => {
    const counter = {
      _id: this.state.totalCounters + 1,
      count: 1,
      liked: false
    };
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
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].count--;
    this.setState({ counters });
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

          <h1 className="m-3">Shopping Cart (React.JS)</h1>

          <button
            onClick={this.handleAddCounter}
            className="btn btn-warning btm-bg m-3"
          >
            Add Counter
          </button>
          {this.state.counters.length === 0 && (
            <p style={{ color: "red" }}>Your cart is empty</p>
          )}
          {this.state.counters.length !== 0 && (
            <AddCounter
              onReset={this.handleReset}
              onRemoveAllItems={this.handleRemoveAllItems}
              onDelete={this.handleDelete}
              onDecrement={this.handleDecrement}
              onIncrement={this.handleIncrement}
              counters={this.state.counters}
              onClickLike={this.handleLike}
            />
          )}
        </center>
      </div>
    );
  }
}

export default Background;
