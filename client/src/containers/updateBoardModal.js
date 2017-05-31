import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import './UpdateBoard.css';

class UpdateBoard extends Component {

  render() {
    const data = this.props.selectedBoard;
    console.log(data);
    return (
  <div>
    <div className="UpdateBoard_wrapper">
      <div className="UpdateBoard_Box">

        <div className="UpdateBoard_TopBox">
          <p className="UpdateBoard_title">
            <b>Edit your board  </b>
             {data.name}</p>
          <div className="UpdateBoard_X" onClick={() => this.props.closeEditWindow()}></div>
        </div>

        
                <div className="UpdateBoard_CreateBoard">
                  <h5 className="UpdateBoard_Name">Name</h5>
                  <input
                    type='text'
                    className="UpdateBoard_Input"
                    placeholder= {data.name}
                    value=" "/>
                </div>

              <div className="UpdateBoard_CreateBoard">
                <h5 className="UpdateBoard_Name">Description</h5>
                <textarea type='text' value="" className="UpdateBoard_Input">Previous board description here</textarea>
              </div>

              <div className="UpdateBoard_ButtonBox">
                <div className="Buttons_Component1">
                  <button className="delete_button">
                    <b>Delete board</b>
                  </button>
                </div>
                <div className="Buttons_Component2">
                  <button className="save_button">
                    <b>Save</b>
                  </button>
                  <button className="cancel_button" onClick={() => this.props.closeEditWindow()}>
                    <b>Cancel</b>
                  </button>
                </div>
              </div>

      </div>
    </div>
  </div>
  )
}
}

function mapStateToProps(store) {
return {selectedBoard: store.user.selectedBoard}
}

export default connect(mapStateToProps)(UpdateBoard);
