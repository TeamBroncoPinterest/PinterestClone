import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';
import config from './config'
import { getFeed } from './actions/feedActions';
import axios from 'axios';

// Routes
import Nav from './containers/Nav';
import Login from './containers/Login';
import Feed from './containers/Feed';
import Profile from './containers/Profile';


class App extends Component {
  componentWillMount() {
    window.PDK.init({
        appId: 4901570145085834798,
        cookie: true
    });
<<<<<<< HEAD
    // window.PDK.login({ scope : 'read_public'})
=======
    // window.PDK.login({ scope : 'read_public' }, (response) => {
    //   console.log(response);
    // });
>>>>>>> master
    this.props.getFeed();
  }


  render() {
    console.log(this.props);
    return (
      <Router>
        <div>
          <Nav />
          <div className='belowNav'>
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
