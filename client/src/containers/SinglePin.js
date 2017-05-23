import React, { Component } from 'react';


import './SinglePin.css';


class SinglePin extends Component {

  render() {
    return (
      <div className="single-pin-outer-container">
        <div className="single-pin-inner-container">
          <div className="single-pin-pic-container">
            <img className="single-pin-pic" src="./pics/education4.png" alt="pin picture" />
            <button className="single-pin-save"><img className="single-pin-save-pin" src="./pics/pin.png" alt="pin"/>Save</button>
            <div className="dimGradient">
              <a><p>Learn more at <span>link.com</span></p></a>
            </div>
            <div className="dimOverlay"></div>
          </div>
          <div className="single-pin-description-container">
            <p className="single-pin-title">
              Title of Pin
            </p>
            <p className="single-pin-description">
              Pin description right here. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="single-pin-pinner-info">
            <img className="single-pin-pinner-pic" src="./pics/blank-profile.png" alt="pic"/>
            <div className="single-pin-pinner-info-names">
              <p className="single-pin-pinner-name">Pinner Name</p>
              <p className="single-pin-board-name">Board Name</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}




export default SinglePin;
