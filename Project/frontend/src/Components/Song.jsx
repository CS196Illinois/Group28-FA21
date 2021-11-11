import React, { Component } from 'react';

class Song extends React.Component {
    render() { 
        return (
        <div className='song'>
            <img src={this.props.url} alt='Album Image' className ='image'></img>
            <div className='songDetails'>
                <p>
                    {this.props.title} 
                    {this.props.artist}
                </p>
            </div>
            <div className='score'>
                {this.props.score}
            </div>
        </div>
        );
    }
}
 
export default Song;