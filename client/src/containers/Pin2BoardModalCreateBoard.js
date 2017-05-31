import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {updateBoards} from '../actions/userActions';
// import SelectedPin from './SelectedPin'


import './Pin2Board.css'

class Pin2BoardCreateBoard extends Component {
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

  newBoard = (values) => {
    this.props.user.data.boards.push({ ...values })
    this.props.updateBoards(this.props.user.data)
    this.props.savePin(values.name);
  }

  render() {
    const {handleSubmit} = this.props;
    return (

      <div className="Pin2Board_rightBoxHidden">
              <div>
              <h3 className="Pin2Board_CreateBoardHeader">Create board</h3>
              <div onClick={() => this.props.savePinExit()}  className="Pin2Board_X"></div>
          </div>
        <form onSubmit={handleSubmit(this.newBoard)}>
            <div className="Pin2Board_CreateBoardNameDiv">
              <h3 className="Pin2Board_CreateBoardNameHeader">NAME</h3>
              <Field component='input' name="name" className="Pin2Board_CreateBoardInput" type='text' placeholder='Like "Places to Go" or "Recipes to Make"' id='textfield' required/>
            </div>
            <div className="Pin2Board_CreateBoardDescriptionDiv">
              <h3 className="Pin2Board_CreateBoardDescriptionHeader">DESCRIPTION</h3>
              <Field component='input' className="Pin2Board_CreateBoardInput" type='text' placeholder='What is this board about?' name="description" id='textfield' required/>
            </div>

            <div className="Pin2Board_CreateBoardEmptyDiv"></div>

            <div className="Pin2Board_CreateBoardButtonDiv">
              <button onClick={() => this.props.createBoardExit()}  className="Pin2Board_CreateBoardCancelButton">Cancel</button>
              <input className="Pin2Board_CreateBoardCreateButton"  type="submit" value="Create" id="createBtn"  />
            </div>
          </form>
      </div>


  )
  }
}

function mapStateToProps(store) {
  return {boardForm: store.form, user: store.user}
}

Pin2BoardCreateBoard = reduxForm({form: 'boardForm'})(Pin2BoardCreateBoard);

Pin2BoardCreateBoard = connect(mapStateToProps, {updateBoards})(Pin2BoardCreateBoard);


export default Pin2BoardCreateBoard;
