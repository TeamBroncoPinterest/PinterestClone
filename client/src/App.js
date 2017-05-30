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
    let showNav = false;
    if (this.props.user.loggedIn) {
      showNav = this.props.user.loggedIn;
    }
    console.log(this.props.user);
    return (
      <Router>
        <div>
          { showNav && <Nav />}
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
    user: store.user
  }
}

App = connect(mapStateToProps, { getFeed })(App)
export default App;
