import React, { Component } from 'react';

import './Nav.css';


class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-right">
          <div><img /></div>
          <div>
            <input />
          </div>
        </div>
        <nav className="nav-left">
          <ul className="nav-nav-list">
            <li className="nav-nav-item"><img /></li>
            <li className="nav-nav-item"><img /></li>
            <li className="nav-nav-item"><img /></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav;
