import React, { Component } from 'react';

import './Nav.css';
import magnifyingGlass from '../pics/magnifying-glass.png';
import compass from '../pics/compass.png'
import profileIcon from '../pics/profile.png'
import logo from '../pics/Pinterest-Wordmark+Badge/RGB/badgeRGB.png';

class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-left">
          <div className="nav-logo-container">
            <img src={logo} className="nav-logo" alt="" />
          </div>
          <div className="nav-search-container">
            <img className="nav-magnifying-glass" src={magnifyingGlass} alt="" />
            <input className="nav-search-bar" placeholder="Search" />
          </div>
        </div>
        <nav className="nav-right">
          <ul className="nav-nav-list">
            <li className="nav-nav-item"><img className="nav-nav-image" src={compass} alt="" /></li>
            <li className="nav-nav-item"><img className="nav-nav-profile" src={profileIcon} alt="" /></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav;
