import React, { Component } from 'react'

export class Content extends Component {
    render() {
    return (<div className="App-content">
        <h2>Current Time: {new Date().toLocaleTimeString()}.</h2>
        <h2>Current Date: {new Date().toLocaleDateString()}.</h2>
        <h1>Welcome to Galway League Tennis</h1>
        </div>
    );
    }
}