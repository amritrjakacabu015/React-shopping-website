import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };

  handleDecrement() {
    if (this.state.count > 1) this.setState({ count: this.state.count - 1 });
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <center>
          <button
            onClick={() => this.handleDecrement()}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>

          <span className="badge m-3 badge-secondary">{this.state.count}</span>

          <button
            onClick={() => this.handleIncrement()}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter._id)}
            className="btn btn-danger btn-sm m-2"
          >
            x
          </button>
        </center>
      </div>
    );
  }
}

export default Counter;
