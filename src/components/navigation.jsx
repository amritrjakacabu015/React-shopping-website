import React from "react";

const Navigation = ({ countTotal }) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <span className="navbar-brand mb-0 h1">
        Cart{" "}
        <span className="badge badge-pill badge-secondary">{countTotal}</span>
      </span>
    </nav>
  );
};

export default Navigation;
