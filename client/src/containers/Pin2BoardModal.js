import React, { Component } from 'react';
import Pin2BoardCreateBoard from './Pin2BoardModalCreateBoard';
import Pin2BoardSelectBoard from './Pin2BoardModalSelectBoard';

import './Pin2Board.css'


class Pin2BoardModal extends Component {
  constructor(props) {
    super(props);
    this.state = { showBoards: false }
  }

  createBoardClick = () => {
    this.setState({showBoards: true})
  }

  createBoardExit = () => {
    this.setState({showBoards: false})
  }


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



        { (this.state.showBoards && <Pin2BoardCreateBoard createBoardExit={() => this.createBoardExit()}/>)
        || <Pin2BoardSelectBoard createBoardClick={() => this.createBoardClick()} /> }




      </div>
    </div>
    )
  }
}




export default Pin2BoardModal;
