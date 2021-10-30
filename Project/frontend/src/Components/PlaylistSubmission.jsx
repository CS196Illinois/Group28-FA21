import React, { Component } from "react";
import SongBox from "./SongBox";

class PlaylistSumbission extends React.Component {
  state = {
    clicked: false,
  };
  render() {
    if (this.state.click) {
    }
    return (
      <div className="PlayListSubmission">
        <label name="playlist"> Enter your playlist here</label>
        <input type="text" name="playlist"></input>
        <button type="button" class="btn btn-primary" onClick={() => this.click()}>Submit</button>
        <center>
          <SongBox appear={this.state.clicked} />
        </center>
      </div>
    );
  }
  click() {
    this.setState({ clicked: true });
  }
}

export default PlaylistSumbission;
