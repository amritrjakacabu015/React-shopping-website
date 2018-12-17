import React, { Component } from "react";
import Like from "./common/like";

class Counter extends Component {
  render() {
    const {
      onDecrement,
      onIncrement,
      onDelete,
      onClickLike,
      counter
    } = this.props;
    return (
      <div>
        <center>
          <button
            disabled={counter.count === 1 ? "disables" : ""}
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>

          <span className="badge m-3 badge-secondary">{counter.count}</span>

          <button
            disabled={counter.count === 5 ? "disabled" : ""}
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>

          <Like
            liked={counter.liked}
            onClickLike={() => onClickLike(counter)}
          />

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
