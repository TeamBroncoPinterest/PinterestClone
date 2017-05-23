import React from 'react';

class Modal_Component extends Component {

  render() {
    return (
      <div>
        <div className="ModalBoard_wrapper">
          <div className="ModalBoard_Box">

            <div className="ModalBoard_TopBox">
              <p>Future Dynamic Name Here</p>
            </div>

            OTHER MODAL COMPONENTS HERE

            <div  className="ModalBoard_ButtonBox">

              <div class="Buttons_Component">
                  <button className="cancel_button"><b>Cancel</b></button>
                <button className="create_button"><b>Create</b></button>
             </div>
             </div>
           </div>
         </div>
       </div>
    )
  }
}




export default Modal_Component;
