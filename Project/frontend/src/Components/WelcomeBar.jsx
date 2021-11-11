import React, { Component } from "react";

class WelcomeBar extends React.Component {
  render() {
    return (
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <h1 class="navbar-brand">
              Spotify Sentiment Analysis
            </h1>
          </div>
        </nav>  
      </div>
    );
  }
}

export default WelcomeBar;
