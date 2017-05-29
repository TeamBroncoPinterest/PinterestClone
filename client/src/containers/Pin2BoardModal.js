import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    const data = this.props.data
    return (
    <div className="Pin2Board_wrapper">
      <div className="Pin2Board_Box">

              <div className="Pin2Board_leftBox">
                  <div className="Pin2Board_PinInfo">

                      <img className="Pin2Board_PinImg" alt="Pin Here" src={data.image.original.url}/>
                        <div>
                              <p className="Pin2Board_PinDescription" role="textbox">{data.note}</p>
                       </div>
                  </div>
              </div>



        { (this.state.showBoards && <Pin2BoardCreateBoard createBoardExit={() => this.createBoardExit()} savePinExit={() => this.props.savePinExit()} />)
        || <Pin2BoardSelectBoard createBoardClick={() => this.createBoardClick()} savePinExit={() => this.props.savePinExit()} /> }




      </div>
    </div>
    )
  }
}


function mapStateToProps(store) {
  return {
    data: store.feed.selectedPin
  }
}

export default connect(mapStateToProps)(Pin2BoardModal);
