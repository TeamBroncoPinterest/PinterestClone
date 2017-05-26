import React, { Component } from 'react';

import './Pin2Board.css'

class Pin2BoardModal extends Component {

  render() {
    return (
    <div className="Pin2Board_wrapper">
      <div className="Pin2Board_Box">

              <div className="Pin2Board_leftBox">
                  <div className="Pin2Board_PinInfo">
                      
                      <img className="Pin2Board_PinImg" alt="Pin Here" src="https://s-media-cache-ak0.pinimg.com/236x/21/21/83/2121834e020725e8849cacf5304f4fa1.jpg"/>
                        <div>
                              <p className="Pin2Board_PinDescription" role="textbox">Pin Description Here. Will  need to make responsive based on pin that is selected.</p>
                       </div>
                  </div>
              </div>



        { this.props.children }




      </div>
    </div>
    )
  }
}




export default Pin2BoardModal;
