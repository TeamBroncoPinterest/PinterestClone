import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types'
import { searchFeed, clearSearch } from '../actions/feedActions';

import './Nav.css';
import magnifyingGlass from '../pics/magnifying-glass.png';
import compass from '../pics/compass.png'
import profileIcon from '../pics/profile.png'
import logo from '../pics/Pinterest-Wordmark+Badge/RGB/badgeRGB.png';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }
  }
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  searchTerm = (e) => {
    e.preventDefault();
    if(this.props.history.location.pathname !== "/") {
      this.props.history.push('/');
    }
    this.props.searchFeed(this.state.term);
  }

  clearSearch = () => {
    this.setState({ term: ''});
    this.props.clearSearch();
  }

  render() {
    return (
      <div className="nav-container">
        <div className="nav-left">
          <div className="nav-logo-container">
              <Link to="/" onClick={()=> this.clearSearch()}><img src={logo} className="nav-logo" alt="" /></Link>

          </div>
          <div className="nav-search-container">
            <img className="nav-magnifying-glass" src={magnifyingGlass} alt="" onClick={() => this.searchTerm()} />
            <form className="nav-form" onSubmit={(e) => this.searchTerm(e)}>
              <input className="nav-search-bar" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} placeholder="Search" />
            </form>
            { this.state.term && <div className="nav-x" onClick={()=> this.clearSearch()}>x</div>}
          </div>
        </div>
        <nav className="nav-right">
          <ul className="nav-nav-list">
            <li className="nav-nav-item"><Link to="/" onClick={()=> this.clearSearch()}><img className="nav-nav-image" src={compass} alt="" /></Link></li>
            <li className="nav-nav-item"><Link to="/profile"><img className="nav-nav-profile" src={profileIcon} alt="" /></Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}
Nav = withRouter(Nav);
export default connect(null, { searchFeed, clearSearch })(Nav);
