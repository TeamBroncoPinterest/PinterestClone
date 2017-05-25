import React, { Component } from 'react';
import Modal_Component from "./Modal_Component"
import './Modal_Component.css'

class CreateBoard extends Component {

  render() {
    return (

        <Modal_Component closeWindow={() => this.props.closeWindow()} title="Create board">

          <div  className="CreateBoard_CreateBoard">
            <h5 className="CreateBoard_Name">Name</h5>
              <input  type='text' className="CreateBoard_Input" placeholder='Like "places to Go" or "Recipes to Make"' require />
            </div>


            <div  className="CreateBoard_CreateBoard">
             <h5 className="CreateBoard_Name">Description</h5>
             <textarea  type='text'  className="CreateBoard_Input"  required> </textarea>
           </div>

        </Modal_Component>

    )
  }
}




export default CreateBoard;
