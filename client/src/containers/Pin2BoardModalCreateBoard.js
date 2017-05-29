import React, { Component } from 'react';
import SelectedPin from './SelectedPin'


import './Pin2Board.css'

class Pin2BoardCreateBoard extends Component {

  render() {
    return (

      <div className="Pin2Board_rightBoxHidden">
              <div>
              <h3 className="Pin2Board_CreateBoardHeader">Create board</h3>
              <div onClick={() => this.props.savePinExit()}  className="Pin2Board_X"></div>
          </div>

          <div className="Pin2Board_CreateBoardNameDiv">
            <h3 className="Pin2Board_CreateBoardNameHeader">NAME</h3>
            <input  className="Pin2Board_CreateBoardInput"   type='text'  placeholder='Like "Places to Go" or "Recipes to Make"'  id='textfield'  required/>
          </div>

          <div className="Pin2Board_CreateBoardEmptyDiv"></div>

          <div className="Pin2Board_CreateBoardButtonDiv">
            <button onClick={() => this.props.createBoardExit()}  className="Pin2Board_CreateBoardCancelButton">Cancel</button>
            <input className="Pin2Board_CreateBoardCreateButton"  type="submit" value="Create" id="createBtn" />
          </div>

      </div>


  )
  }
}




export default Pin2BoardCreateBoard;
