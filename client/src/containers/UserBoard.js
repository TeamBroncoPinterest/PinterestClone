import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';


//Stylings and Pics
import './UserBoard.css';
import blankProfile from '../pics/blank-profile.png';


class UserBoard extends Component {


  render() {
    return (
      <div className="board-wrapper">
        <div className="board-mainContainer">
          <div className="board-barDiv">
              <div className="board-fixedBar">
                    <div className="board-iconDiv">
                      <button className="board-icons1"></button>
                      <button className="board-icons2"></button>
                      <button className="board-icons3"></button>
                    </div>
              </div>
              <div className="board-header">
                  <h3 className="board-title">Board title</h3>
                  <div className="board_boardinfodiv">
                      <div className="board-data">
                        <p className="board-number"><b>9 </b> Pins</p>
                        <p className="board-description"><b>Board description here</b></p>
                      </div>
                      <img alt="" src={blankProfile} className="board_userImg" />
                  </div>
              </div>
              <div className="board-grid">

              </div>

           </div>
      </div>
    </div>

    )
  }
}



export default UserBoard;
