import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { searchFeed } from '../actions/feedActions';

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

  search = () => {
    this.props.searchFeed(this.state.term);
  }

  render() {
    return (
      <div className="nav-container">
        <div className="nav-left">
          <div className="nav-logo-container">
              <Link to="/"><img src={logo} className="nav-logo" alt="" /></Link>

          </div>
          <div className="nav-search-container">
            <img className="nav-magnifying-glass" src={magnifyingGlass} alt="" />
            <form className="nav-form" onSubmit={() => this.search()}>
              <input className="nav-search-bar" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} placeholder="Search" />
            </form>
          </div>
        </div>
        <nav className="nav-right">
          <ul className="nav-nav-list">
            <li className="nav-nav-item"><Link to="/"><img className="nav-nav-image" src={compass} alt="" /></Link></li>
            <li className="nav-nav-item"><Link to="/profile"><img className="nav-nav-profile" src={profileIcon} alt="" /></Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default connect(null, { searchFeed })(Nav);
