import React from 'react';
import Modal_Component from "./Modal_Component"


class CreateBoard extends Component {

  render() {
    return (

        <Modal_Component title="Create board">

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
