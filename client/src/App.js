import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';
import { getFeed } from './actions/feedActions';

// Routes
import Nav from './containers/Nav';
import Login from './containers/Login';
import Feed from './containers/Feed';
import Profile from './containers/Profile';
import Pin2BoardModal from './containers/Pin2BoardModal';


class App extends Component {
  
  componentWillMount() {
    // window.PDK.init({
    //     appId: 4901570145085834798,
    //     cookie: true
    // });
    // window.PDK.logout();
    // window.PDK.login({ scope : 'read_public'})
    this.props.getFeed();
  }


  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div className='belowNav'>
            <Route path='/login' component={Login} />
            <Route path='/' exact={true} component={Feed} />
            <Route path='/profile' component={Profile} />
            <Route path='/pin' component={Pin2BoardModal} />
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
