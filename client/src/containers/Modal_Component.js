import React from 'react';



class Modal_Component extends Component {

  render() {
    return (
      <div>
            <div className="ModalBoard_wrapper">
              <div className="ModalBoard_Box">

                <div className="ModalBoard_TopBox">
                  <p className="Modal_title">{ this.props.title }</p>
                  <div className="ModalBoard_X"></div>
                </div>

                { this.props.children }

                   

                <div  className="ModalBoard_ButtonBox">

                  <div className="Buttons_Component">
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
