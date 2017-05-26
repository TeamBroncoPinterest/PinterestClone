import React, { Component } from 'react';
import Pin2Board_Modal from './Pin2BoardModal'

import './Pin2Board.css'

class Pin2Board_SelectBoard extends Component {

  render() {
    return (


    <Pin2Board_Modal>

        <div className="Pin2Board_rightBox">
            <div>
                <h3 className="Pin2Board_ChooseBoard">Choose board</h3>
                <div className="Pin2Board_X"></div>
            </div>

            <div className="Pin2Board_LowerRight">
                <div className="Pin2Board_SearchDiv">
                    <div className="Pin2Board_SearchMag"></div>
                  <input type="text" placeholder="Search" className="Pin2Board_SerachBar" />
                </div>
           </div>

          <div className="Pin2Board_BoardScrollBox">
            <header className="Pin2Board_Header">Existing boards</header>
                <ul className="Pin2Board_UL">

                        <div className="Pin2Board_BoardDiv">
                              <div className="Pin2Board_BoardImgBox">
                                  <img  className="Pin2Board_BoardImg" src="https://s-media-cache-ak0.pinimg.com/200x150/65/75/23/65752306e76d3f8e7b16371299f541da.jpg">
                              </div>
                          <p className="Pin2Board_BoardTitle"><b>Food</b></p>
                          <button className="Pin2Board_SaveButton"><img className="Pin2Board_PinIcon" src="https://image.ibb.co/bKxULv/pin.png" /> Save</button>
                        </div>
                </ul>
          </div>

          <button clasName="Pin2Board_CreateBoardButton"><img src="https://image.ibb.co/nH2FSa/Create_Board_Plus1.png" clasName="Pin2Board_PlusButton" />
          <p clasName="Pin2Board_CreateBoard">Create board</p></button>

      </div>


      <div clasName="Pin2Board_rightBoxHidden">
              <div>
              <h3 clasName="Pin2Board_CreateBoardHeader">Create board</h3>
              <div clasName="Pin2Board_X"></div>
          </div>

          <div clasName="Pin2Board_CreateBoardNameDiv">
            <h3 clasName="Pin2Board_CreateBoardNameHeader">NAME</h3>
            <input  clasName="Pin2Board_CreateBoardInput"   type='text'  placeholder='Like "Places to Go" or "Recipes to Make"'  id='textfield'  required/>
          </div>

          <div clasName="Pin2Board_CreateBoardEmptyDiv"></div>

          <div clasName="Pin2Board_CreateBoardButtonDiv">
            <button  clasName="Pin2Board_CreateBoardCancelButton">Cancel</button>
            <input clasName="Pin2Board_CreateBoardCreateButton"  type="submit" value="Create" id="createBtn" />
          </div>

      </div>


    </Pin2Board_Modal>




  }
}




export default Pin2Board_SelectBoard;
