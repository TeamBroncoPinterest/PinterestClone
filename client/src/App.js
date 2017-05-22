import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import SinglePin from './containers/SinglePin';





class App extends Component {
  render() {
    // const feed = this.props.feed.map( () => {
    //   return <SinglePin />
    // })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="feed">
          <SinglePin />
          <SinglePin />
          <SinglePin />
          <SinglePin />
          <SinglePin />
          <SinglePin />
          <SinglePin />
          <SinglePin />
          <SinglePin />
          <SinglePin />
          <SinglePin />
          <SinglePin />
        </div>
      </div>
    );
  }
}

export default App;
