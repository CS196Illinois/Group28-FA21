import React, { Component } from "react";

class Song extends React.Component {
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
      <div className="song">
        <img src={this.props.url} alt="Album Image" className="image"></img>
        <div className="songDetails">
          <p>
            {this.props.title}
            <br></br>
            {this.props.artist}
          </p>
        </div>
        <div
          style={{
            backgroundColor: this.getColor(this.props.score),
          }}
          className="score"
        >
          {this.props.score}
        </div>
      </div>
    );
  }
}

export default Song;
