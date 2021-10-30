import React, { Component } from 'react';

class Song extends React.Component {
    render() { 
        return (
        <div className='Song'>
            <img src={this.props.url} alt='Album Image'></img>
            <div className='songDetails'>
                <p>
                    {this.props.title} 
                    {this.props.artist}
                </p>
            </div>
            <div className='Score'>
                {this.props.score}
            </div>
        </div>
        );
    }
}
 
export default Song;