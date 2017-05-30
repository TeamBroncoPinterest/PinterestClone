import React, {Component} from 'react';
import Profile from './Profile'
import './UpdateBoard.css';

class UpdateBoard extends Component {

  render() {
    return ( 
    < div > 
    <div className="UpdateBoard_wrapper">
      <div className="UpdateBoard_Box">

        <div className="UpdateBoard_TopBox">
          <p className="UpdateBoard_title">
            <b>Edit your board </b>
             BOARD NAME HERE</p>
          <div className="UpdateBoard_X" onClick={() => this.props.closeEditWindow()}></div>
        </div>

        <div className="UpdateBoard_CreateBoard">
          <h5 className="UpdateBoard_Name">Name</h5>
          <input
            type='text'
            className="UpdateBoard_Input"
            placeholder=' '
            value="Original board name here "/>
        </div>

        <div className="UpdateBoard_CreateBoard">
          <h5 className="UpdateBoard_Name">Description</h5>
          <textarea type='text' className="UpdateBoard_Input">Previous board description here</textarea>
        </div>

        <div className="UpdateBoard_ButtonBox">

          <div className="Buttons_Component">
            <button className="cancel_button" onClick={() => this.props.closeEditWindow()}>
              <b>Cancel</b>
            </button>
            <button className="create_button">
              <b>Save</b>
            </button>
          </div>
        </div>
      </div>
    </div> < /div>
  )
}
}

export default UpdateBoard;