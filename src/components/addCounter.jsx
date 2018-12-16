import React, { Component } from "react";
import Counter from "./counter";

class AddCounter extends Component {
  render() {
    const { onReset, onRemoveAllItems, counters } = this.props;
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
            onDelete={this.props.onDelete}
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default AddCounter;
