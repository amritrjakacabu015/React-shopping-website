import React, { Component } from "react";
import Counter from "./counter";

class AddCounter extends Component {
  render() {
    const {
      onReset,
      onRemoveAllItems,
      counters,
      onDelete,
      onClickLike,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div>
        <button onClick={() => onReset()} className="btn btn-primary btn-bg ">
          Reset
        </button>

        <button
          onClick={() => onRemoveAllItems()}
          className="btn btn-danger btn-bg m-3"
        >
          Remove All
        </button>
        {counters.map(counter => (
          <Counter
            key={counter._id}
            onClickLike={onClickLike}
            onDelete={onDelete}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default AddCounter;
