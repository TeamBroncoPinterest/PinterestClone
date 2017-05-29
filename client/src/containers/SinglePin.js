import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPin } from '../actions/feedActions';
import $ from 'jquery';


import './SinglePin.css';
import pin from '../pics/pin.png';
import blankProfile from '../pics/blank-profile.png';
import SelectedPin from './SelectedPin';
import Pin2BoardModal from './Pin2BoardModal'

class SinglePin extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, savePin: false }
  }

  selectPin = () => {
    this.setState({ selected: true })
    this.props.selectPin(this.props.data)
      $('body').css('overflow', 'hidden');

  }

  exitPin = () => {
    this.setState({ selected: false })
    $('body').css('overflow', 'scroll')
  }

  savePin = () => {
    this.setState({ savePin: true })
  }

  savePinExit = () => {
    this.setState({ savePin: false })
  }


  render() {
    const data = this.props.data
    let title = ''
    if (data.metadata.article) {
      title = data.metadata.article.name
    } else if (data.metadata.link) {
      title = data.metadata.link.title;
    }
    return ( 
      <div className="single-pin-shell">
        <div className="single-pin-outer-container">
          <div className="single-pin-inner-container">
            <div className="single-pin-pic-container">
            { (this.state.selected && <SelectedPin exitPin={() => this.exitPin()} />) || (this.state.savePin && <Pin2BoardModal savePinExit ={ () => this.savePinExit() } />) }
              <img className="single-pin-pic" src={data.image.original.url} alt="" />
              <button onClick={() => this.savePin()} className="single-pin-save"><img className="single-pin-save-pin" src={pin} alt="pin"/>Save</button>
              <div className="dimGradient">
                <a><p><span>{data.original_link}</span></p></a>
              </div>
              <a className="dimOverlay" onClick={() => this.selectPin()}><div></div></a>
            </div>
            <div className="single-pin-description-container">
              <p className="single-pin-title">
                {title}
              </p>
              <p className="single-pin-description">
                {data.note}
              </p>
            </div>
            <div className="single-pin-pinner-info">
              <img className="single-pin-pinner-pic" src={blankProfile} alt="pic"/>
              <div className="single-pin-pinner-info-names">
                <p className="single-pin-pinner-name">{data.creator.first_name}&nbsp;{data.creator.last_name}</p>
                <p className="single-pin-board-name">{data.board.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    pin: state.data
  }
}


export default connect(mapStateToProps, { selectPin })(SinglePin);
