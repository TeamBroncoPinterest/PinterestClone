import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import CreateBoard from './CreateBoard';
import SingleBoard from './SingleBoard';
import UpdateBoard from './updateBoardModal';

//Stylings and Pics
import './Profile.css';
import nut from '../pics/nut.png';
import dotdotdot from '../pics/dotdotdot.png';
import blankProfile from '../pics/blank-profile.png';
import AddBoard from './AddBoard';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      create: false,
      edit: false
    }
  }

  createBoard = () => {
    this.setState({create: true})
  }

  closeWindow = () => {
    this.setState({create: false})
  }

  editBoard = () => {
    this.setState({edit: true})
  }

  closeEditWindow = () => {
    this.setState({edit: false})
  }

  render() {
    console.log(this.props.user)
    if (!this.props.user.loggedIn) {
      return (< Redirect to = "/login" />)
    }
    const data = {
      first: 'Cameron',
      bio: 'I <3 Pinterest',
      img: blankProfile,
      boards: []
    }

    const boards = data
      .boards
      .map((v) => {
        return <SingleBoard data={v} key={v.name}/>
      })

    return (
      <div className="profile-container">
        <div className="profile-nav">
          <div className="profile-side-margin">
            <div className="profile-icon">
              <img className="profile-nut" src={nut} alt=""/>
            </div>
            <div className="profile-icon">
              <img className="profile-dotdotdot" src={dotdotdot} alt=""/>
            </div>
          </div>
        </div>
        <div className="profile-profile-info">
          <div className="profile-side-margin profile-info-margin">
            <div className="profile-name">
              <h3>{data.first}</h3>
            </div>
            <div className="profile-profile-info-right">
              <div className="profile-info-bio">{data.bio}</div>
              <div className="profile-info-pic-container">
                <img className="profile-info-pic" src={data.img} alt="missing profile pic"/>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-filter">
          <div className="profile-side-margin profile-buttons">
            <button className="profile-button profile-button-boards">Boards</button>
            <button className="profile-button profile-button-pins">Pins</button>
          </div>
        </div>
        <div className="profile-boards-pins">
          {this.state.create && <CreateBoard closeWindow={() => this.closeWindow()}/>}
          {this.state.edit && <UpdateBoard closeEditWindow={() => this.closeEditWindow()}/>}
          <AddBoard createBoard={() => this.createBoard()}/>
          <SingleBoard editBoard={() => this.editBoard()}/>
          <SingleBoard/>
          <SingleBoard/>
          <SingleBoard/>
          <SingleBoard/>
          <SingleBoard/>
          <SingleBoard/>
          <SingleBoard/>
          <SingleBoard/>
          <SingleBoard/>
          <SingleBoard/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {user: store.user}
}

export default connect(mapStateToProps)(Profile);
