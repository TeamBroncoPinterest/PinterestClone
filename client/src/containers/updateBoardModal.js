import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import './UpdateBoard.css';

import { deletePinsByBoard } from '../actions/feedActions';
import { updateBoards } from '../actions/userActions';

class UpdateBoard extends Component {

  editBoard = () => {

  }

  deleteBoard = () => {
    const boardName = this.props.selectedBoard.name;
    const user = this.props.user;
    this.props.user.boards = this.props.user.boards.filter( v => {
      return v.name !== boardName;
    })
    console.log(user);
    this.props.user.pins = this.props.user.pins.filter( v => {
      return v.board.name !== boardName;
    })
    this.props.updateBoards(this.props.user);
    this.props.deletePinsByBoard(user, boardName);
    this.props.closeEditWindow();
  }


  render() {
    const data = this.props.selectedBoard;
    return (
      <div>
        <div className="UpdateBoard_wrapper">
          <div className="UpdateBoard_Box">

            <div className="UpdateBoard_TopBox">
              <p className="UpdateBoard_title">
                <b>Edit your board </b>
                 {data.name}</p>
              <div className="UpdateBoard_X" onClick={() => this.props.closeEditWindow()}></div>
            </div>


                    <div className="UpdateBoard_CreateBoard">
                      <h5 className="UpdateBoard_Name">Name</h5>
                      <Field
                        type="text"
                        className="UpdateBoard_Input"
                        placeholder={data.name}
                        component="input"
                        name="name"
                      />
                    </div>

                  <div className="UpdateBoard_CreateBoard">
                    <h5 className="UpdateBoard_Name">Description</h5>
                    <Field
                      type="text"
                      placeholder={data.description}
                      className="UpdateBoard_Input"
                      component="textarea"
                      name="description"
                    />
                  </div>

                  <div className="UpdateBoard_ButtonBox">
                    <div className="Buttons_Component1">
                      <button className="delete_button" onClick={() => this.deleteBoard()}>
                        <b>Delete board</b>
                      </button>
                    </div>
                    <div className="Buttons_Component2">
                      <button className="save_button" onClick={() => this.editBoard()}>
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
  return {
    user: store.user.data,
    selectedBoard: store.user.selectedBoard,
    initialValues: store.user.selectedBoard,
    boardForm: store.form
  }
}
UpdateBoard = reduxForm({form: 'boardForm'})(UpdateBoard);

export default connect(mapStateToProps, { updateBoards, deletePinsByBoard })(UpdateBoard);
