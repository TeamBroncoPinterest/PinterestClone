import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPin } from '../actions/feedActions';


import './SelectedPin.css';
import blankProfilePic from '../pics/blank-profile.png';
import pin from '../pics/pin.png';
import close from '../pics/close-icon.png';
import check from '../pics/check-icon.png';
import dots from '../pics/dotdotdot.png';
import share from '../pics/upload.JPG';
import Pin2BoardModal from './Pin2BoardModal'



class SelectedPin extends Component {

  constructor(props) {
    super(props)
    this.state = { savePin: false}
  }

  savePin = () => {
    this.setState({ savePin: true })
    this.props.selectPin(this.props.data)
  }

  savePinExit = () => {
    this.setState({ savePin: false })
  }

  toLink = (link) => {
    console.log(link);
    window.open(link);
  }


  render() {
    const data = this.props.data;
    const link = data.original_link;
    console.log(data);
    return (
      <div className='selected-pin-body'>
      { this.state.savePin && <Pin2BoardModal savePinExit ={ () => this.savePinExit() } /> }
      <button className='selected-pin-control-button-close' onClick={() => this.props.exitPin()}><img src={close} alt='close' /></button>
        <div className='selected-pin-container'>
          <div className='selected-pin-header'>
            <div className='selected-pin-control'>
              <button className='selected-pin-control-button'><img src={share} alt='share' className='selected-pin-control-button-img' /></button>
              <button className='selected-pin-control-button'><img src={check} alt='check' className='selected-pin-control-button-img' /></button>
              <button className='selected-pin-control-button'><img src={dots} alt='dots' className='selected-pin-control-button-img-dots' /></button>
            </div>
            <button onClick={() => this.savePin() } className='selected-pin-save'><img className='selected-pin-save-img' src={pin} alt='pin'/>Save</button>
          </div>
          <div className='selected-pin-view'>
            <button className='selected-pin-control-button-close-mobile' onClick={() => this.props.exitPin()}><img src={close} alt='close' /></button>
            <img onClick={() => this.toLink(link) } src={data.image.original.url}   alt='img' className='selected-pin-img' />
          </div>
          <div className='selected-pin-info'>
            <div className='selected-pin-about'>
              <img src={blankProfilePic} className='selected-pin-about-logo' alt='Profile Pic'/>
              <p>{data.note}</p>
            </div>
            <div>

            

              <button onClick={() => this.toLink(link) } className='selected-pin-info-visit'>Visit</button>

            </div>
          </div>
          <div className='selected-pin-user-info'>
            <img src={blankProfilePic} className='selected-pin-about-logo' alt='Profile Pic'/>
            <p>{data.creator.first_name}&nbsp;{data.creator.last_name}</p>
          </div>
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
export default connect(mapStateToProps, { selectPin })(SelectedPin)
