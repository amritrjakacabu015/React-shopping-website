import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa m-4 fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        onClick={this.props.onClickLike}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
