import React, { Component } from "react";
import Song from "./Song";

class SongData {
  constructor(url, title, artist, score) {
    this.url = url;
    this.title = title;
    this.artist = artist;
    this.score = score;
  }
}

class SongBox extends React.Component {
  state = {
    songs: [new SongData("google.com", "Hello", "Artist", "50")]
  };
  render() {
    var songList  = this.state.songs.map((data) => {
      <Song url={data.url} title={data.title} artist={data.artist} score={data.score}/>
    })
    if (this.props.appear) {
      return (
        <div className="SongBox">
          {songList}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default SongBox;
