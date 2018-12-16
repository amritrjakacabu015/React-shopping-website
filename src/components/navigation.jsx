import React, { Component } from "react";

class Navigation extends Component {
  countTotal() {}

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <span className="navbar-brand mb-0 h1">
          Cart{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.countTotal}
          </span>
        </span>
      </nav>
    );
  }
}

export default Navigation;
