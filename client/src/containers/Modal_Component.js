import React, { Component } from 'react';

import './Modal_Component.css'

class Modal_Component extends Component {

  render() {
    return (
      <div className="ModalBoard_wrapper">
        <div className="ModalBoard_Box">

          <div className="ModalBoard_TopBox">
            <p className="Modal_title">{ this.props.title }</p>
            <div className="ModalBoard_X" onClick={() => this.props.closeWindow()}></div>
          </div>

          { this.props.children }

          <div  className="ModalBoard_ButtonBox">

            <div className="Buttons_Component">
                <button className="cancel_button" onClick={() => this.props.closeWindow()}><b>Cancel</b></button>
              <button className="create_button"><b>Create</b></button>
           </div>
         </div>
       </div>
     </div>
    )
  }
}




export default Modal_Component;
