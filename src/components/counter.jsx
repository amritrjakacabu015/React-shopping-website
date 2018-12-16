import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <center>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>

          <span className="badge m-3 badge-secondary">
            {this.props.counter.count}
          </span>

          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
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
