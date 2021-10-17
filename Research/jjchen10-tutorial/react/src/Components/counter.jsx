import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends React.Component {
    state = {
        value: this.props.value,
        tags: []
     };

     /* constructor() {
         super();
         this.handleIncrement = this.handleIncrement.bind(this);
     } */

     handleIncrement = product => {
         this.setState({ value: this.state.value + 1 });
     };

    render() {
        return (
            <div>
                <span className = {this.getBadgeClasses} >{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({ id: 1})} className = "btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{ this.state.tags.map(tag => <li key = {tag}>{ tag }</li>) }</ul>;
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default Counter;
