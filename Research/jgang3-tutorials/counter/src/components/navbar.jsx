import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
          NavBar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
