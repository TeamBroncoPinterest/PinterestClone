import React, { Component } from 'react';

import './Pin2Board.css'

class Pin2BoardSelectBoard extends Component {

  render() {
    return (

        <div className="Pin2Board_rightBox">
            <div>
                <h3 className="Pin2Board_ChooseBoard">Choose board</h3>
                <div className="Pin2Board_X" onClick={() => this.props.savePinExit()}></div>

            </div>

            <div className="Pin2Board_LowerRight">
                <div className="Pin2Board_SearchDiv">
                    <div className="Pin2Board_SearchMag"></div>
                  <input type="text" placeholder="Search" className="Pin2Board_SearchBar" />
                </div>
           </div>

          <div className="Pin2Board_BoardScrollBox">
            <header className="Pin2Board_Header">Existing boards</header>
                <ul className="Pin2Board_UL">

                        <div className="Pin2Board_BoardDiv">
                              <div className="Pin2Board_BoardImgBox">
                                  <img  className="Pin2Board_BoardImg" alt="" src="https://s-media-cache-ak0.pinimg.com/200x150/65/75/23/65752306e76d3f8e7b16371299f541da.jpg" />
                              </div>
                          <p className="Pin2Board_BoardTitle"><b>Food</b></p>
                          <button className="Pin2Board_SaveButton"><img className="Pin2Board_PinIcon" alt="" src="https://image.ibb.co/bKxULv/pin.png" /> Save</button>
                        </div>
                </ul>
          </div>

          <button onClick={() => this.props.createBoardClick()} className="Pin2Board_CreateBoardButton"><img src="https://image.ibb.co/nH2FSa/Create_Board_Plus1.png" alt="" className="Pin2Board_PlusButton" />
          <p className="Pin2Board_CreateBoard">Create board</p></button>

      </div>

  )
  }
}




export default Pin2BoardSelectBoard;
