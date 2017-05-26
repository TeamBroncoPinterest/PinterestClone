import React, { Component } from 'react';
import ModalComponent from "./ModalComponent"
import './ModalComponent.css'

class CreateBoard extends Component {

  render() {
    return (

        <ModalComponent closeWindow={() => this.props.closeWindow()} title="Create board">

          <div  className="CreateBoard_CreateBoard">
            <h5 className="CreateBoard_Name">Name</h5>
              <input  type='text' className="CreateBoard_Input" placeholder='Like "places to Go" or "Recipes to Make"' require />
            </div>


            <div  className="CreateBoard_CreateBoard">
             <h5 className="CreateBoard_Name">Description</h5>
             <textarea  type='text'  className="CreateBoard_Input"  required> </textarea>
           </div>

        </ModalComponent>

    )
  }
}




export default CreateBoard;
