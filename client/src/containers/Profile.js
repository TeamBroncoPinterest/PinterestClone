import React, {Component} from 'react';

import './Profile.css';
import nut from '../pics/nut.png';
import dotdotdot from '../pics/dotdotdot.png';
import blankProfile from '../pics/blank-profile.png';
import SingleBoard from './SingleBoard';
import AddBoard from './AddBoard';

class Profile extends Component {
  render() {
    const data = {
      first: 'Cameron',
      bio: 'I <3 Pinterest',
      img: blankProfile,
      boards: []
    }

    return (
      <div className="profile-container">
        <div className="profile-nav">
          <div className="profile-side-margin">
            <div className="profile-icon">
              <img className="profile-nut" src={nut} alt=""/>
            </div>
            <div className="profile-icon">
              <img className="profile-dotdotdot" src={dotdotdot} alt=""/>
            </div>
          </div>
        </div>
        <div className="profile-profile-info">
          <div className="profile-side-margin profile-info-margin">
            <div className="profile-name">
              <h3>{data.first}</h3>
            </div>
            <div className="profile-profile-info-right">
              <div className="profile-info-bio">{data.bio}</div>
              <div className="profile-info-pic-container">
                <img className="profile-info-pic" src={data.img} alt="missing profile pic"/>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-filter">
          <div className="profile-side-margin profile-buttons">
            <button className="profile-button profile-button-boards">Boards</button>
            <button className="profile-button profile-button-pins">Pins</button>
          </div>
        </div>
        <div className="profile-boards-pins">
          <AddBoard/>
          <SingleBoard/>
        </div>
      </div>
    )
  }
}

export default Profile;
