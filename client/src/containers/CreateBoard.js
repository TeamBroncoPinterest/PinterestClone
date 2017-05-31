import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {updateBoards} from '../actions/userActions';
import './ModalComponent.css'

class CreateBoard extends Component {
  

  createBoard = (values) => {
    const boards = this.props.user.data.boards
    boards.push({name: values.boardname, description: values.boarddescription})
    this
      .props
      .updateBoards(this.props.user.data);
    this
      .props
      .closeWindow();
  }

  render() {
    const {handleSubmit} = this.props;

    return (

      <div className="ModalBoard_wrapper">
        <div className="ModalBoard_Box">
          <div className="ModalBoard_TopBox">
            <p className="Modal_title">Create board</p>
            <div className="ModalBoard_X" onClick={() => this.props.closeWindow()}></div>
          </div>
          <form onSubmit={handleSubmit(this.createBoard)}>
            <div className="CreateBoard_CreateBoard">
              <h5 className="CreateBoard_Name">Name</h5>
              <Field
                component='input'
                name='boardname'
                type='text'
                className="CreateBoard_Input"
                placeholder='Like "places to Go" or "Recipes to Make"'/>
            </div>

            <div className="CreateBoard_CreateBoard">
              <h5 className="CreateBoard_Name">Description</h5>
              <Field
                component='textarea'
                name='boarddescription'
                type='text'
                className="CreateBoard_Input"/>
            </div>
            <div className="ModalBoard_ButtonBox">

              <div className="Buttons_Component">
                <button className="cancel_button" onClick={() => this.props.closeWindow()}>
                  <b>Cancel</b>
                </button>
                <button className="create_button">
                  <b>Create</b>
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {boardForm: store.form, user: store.user}
}

CreateBoard = reduxForm({form: 'boardForm'})(CreateBoard);

CreateBoard = connect(mapStateToProps, {updateBoards})(CreateBoard);

export default CreateBoard;
