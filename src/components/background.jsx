import React, { Component } from "react";
import Counter from "./counter";

class Background extends Component {
  render() {
    return (
      <div className="cart-main">
        <center>
          <h1>Shopping Website Test</h1>
          <Counter />
        </center>
      </div>
    );
  }
}

export default Background;
