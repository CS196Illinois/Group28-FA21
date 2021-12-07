import React, { Component } from "react";
import Song from "./Song";
import Summary from "./Summary";

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
    songs: [],
    avg: 0,
  };
  componentDidMount() {
    //Populate the array of songs
    const temp = this.state.songs;
    temp.push(new SongData("f", "Title", "Artist", 0.2));
    temp.push(new SongData("f", "Test", "Artist", 0.5));
    temp.push(new SongData("f", "Title", "Artist", 0.8));
    temp.push(new SongData("f", "Title", "Artist", 0.4));
    temp.push(new SongData("f", "Title", "Artist", 0.7));
    temp.push(new SongData("f", "Title", "Artist", 0.8));
    this.state.avg = Number((temp
      .map((song) => song.score)
      .reduce((sum, i) => sum + i, 0) / temp.length).toFixed(2));
    this.setState({ songs: temp });
  }
  render() {
    return (
      <div>
        <div className="SongBox">
          {this.state.songs.map((data) => (
            <Song
              url={data.url}
              title={data.title}
              artist={data.artist}
              score={data.score}
            />
          ))}
          ;
        </div>
        <Summary average={this.state.avg}/>
      </div>
    );
  }
}

export default SongBox;
