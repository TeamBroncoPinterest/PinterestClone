import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';
import config from './config'
import { getFeed } from './actions/feedActions';

// Routes
import Nav from './containers/Nav';
import Login from './containers/Login';
import Feed from './containers/Feed';
import Profile from './containers/Profile';


class App extends Component {
  componentWillMount() {
    window.PDK.init({
        appId: config.Pinterest.ID,
        cookie: true
    });
    this.props.getFeed();
  }


  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div>
            <Route path='/login' component={Login} />
            <Route path='/' exact={true} component={Feed} />
            <Route path='/profile' component={Profile} />
          </div>
        </div>
      </Router>
    );
  }
}


function mapStateToProps(store) {
  return {
    feed: store.feed,
  }
}

App = connect(mapStateToProps, { getFeed })(App)
export default App;
