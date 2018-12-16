import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onDecrement, onIncrement, onDelete, counter } = this.props;
    return (
      <div>
        <center>
          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>

          <span className="badge m-3 badge-secondary">{counter.count}</span>

          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>

          <button
            onClick={() => onDelete(counter._id)}
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
