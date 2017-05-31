import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPin } from '../actions/userActions'

import Pin2BoardCreateBoard from './Pin2BoardModalCreateBoard';
import Pin2BoardSelectBoard from './Pin2BoardModalSelectBoard';

import './Pin2Board.css'


class Pin2BoardModal extends Component {
  constructor(props) {
    super(props);
    this.state = { showBoards: false, note: '' }
  }
  componentWillMount() {
    this.setState({note: this.props.data.note})
  }

  createBoardClick = () => {
    this.setState({showBoards: true})
  }

  createBoardExit = () => {
    this.setState({showBoards: false})
  }
  savePin = (boardName) => {
    this.props.data.note = this.state.note;
    this.props.data.creator.first_name = this.props.user.data.first;
    this.props.data.creator.last_name = this.props.user.data.last;
    this.props.data.board.name = boardName;
    this.props.createPin(this.props.user.data, this.props.data)
    this.props.savePinExit();
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
                              <textarea onChange={(e) => this.setState({note: e.target.value})} className="Pin2Board_PinDescription" role=" " value={this.state.note} />
                       </div>
                  </div>
              </div>



        { (this.state.showBoards && <Pin2BoardCreateBoard createBoardExit={() => this.createBoardExit()} savePinExit={() => this.props.savePinExit()} />)
        || <Pin2BoardSelectBoard savePin={(boardName) => this.savePin(boardName)} createBoardClick={() => this.createBoardClick()} savePinExit={() => this.props.savePinExit()} /> }




      </div>
    </div>
    )
  }
}


function mapStateToProps(store) {
  return {
    data: store.feed.selectedPin,
    user: store.user
  }
}

export default connect(mapStateToProps, { createPin })(Pin2BoardModal);
