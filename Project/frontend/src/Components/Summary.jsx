import React, { Component } from "react";

class Summary extends React.Component {
  getColor(val) {
    if (val >= 0 && val <= 0.4) {
      return "red";
    } else if (val > 0.4 && val <= 0.7) {
      return "yellow";
    } else {
      return "green";
    }
  }

  render() {
    return (
      <div className="Summary" style={{backgroundColor: this.getColor(this.props.average)}}>
        {"Average Sentiment Score: " + this.props.average}
      </div>
    );
  }
}

export default Summary;
