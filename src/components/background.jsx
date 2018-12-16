import React, { Component } from "react";
import AddCounter from "./addCounter";
class Background extends Component {
  render() {
    return (
      <div className="cart-main">
        <center>
          <h1>Shopping Website Test</h1>
          <AddCounter />
        </center>
      </div>
    );
  }
}

export default Background;
