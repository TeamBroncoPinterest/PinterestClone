import React, { Component } from 'react';

import './Profile.css';


class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-nav">
          <div className="profile-side-margin">subnav</div>
        </div>
        <div className="profile-profile-info">
          <div className="profile-side-margin">info</div>
        </div>
        <div className="profile-filter">
          <div className="profile-side-margin">filter</div>
        </div>
        <div className="profile-boards-pins">
          boards
        </div>
      </div>
    )
  }
}

export default Profile;
