import React, { Component } from "react";
import SongBox from "./SongBox";
import NoSongBox from "./NoSongBox";

class PlaylistSumbission extends React.Component {
  state = {
    clicked: false,
    link: ""
  };
  render() {
    var whichSongBox;
    if (this.state.clicked) {
      whichSongBox = <SongBox />;
    } else {
      whichSongBox = <NoSongBox />;
    }
    return (
      <div className="PlayListSubmission">
        <label name="playlist"> Enter your playlist here</label>
        <input type="text" name="playlist" id="input"></input>
        <button type="button" class="btn btn-primary" onClick={() => this.click()}>Submit</button>
        <center>
          {whichSongBox}
        </center>
      </div>
    );
  }
  click() {
    this.setState({ clicked: true });
    this.state.link = document.getElementById("input").value;
    console.log(this.state.link);
    const requestOptions = {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({link : this.state.link})
    };

  }
}

export default PlaylistSumbission;
