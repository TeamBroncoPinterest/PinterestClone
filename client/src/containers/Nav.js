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


// https://api.pinterest.com/oauth/?response_type=code&redirect_uri=http://localhost/&client_id=4901570145085834798&scope=read_public&state=768uyFys
