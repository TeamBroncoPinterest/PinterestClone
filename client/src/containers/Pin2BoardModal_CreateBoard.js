import React, { Component } from 'react';
import Pin2Board_Modal from './Pin2BoardModal'

import './Pin2Board.css'

class Pin2Board_CreateBoard extends Component {

  render() {
    return (


    <Pin2Board_Modal>


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
