import React, { Component } from 'react';

import './Login.css';
import CreateBoard from './CreateBoard';
import SingleBoard from './SingleBoard';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { create: false }
  }

  createBoard = () => {
    this.setState({ create: true })
  }

  closeWindow = () => {
    this.setState({ create: false })
  }

  render() {



    return (
      <div className="login-container">
        { this.state.create && <CreateBoard closeWindow={() => this.closeWindow()} /> }
        <button onClick={() => this.createBoard()}>Login</button>
        <SingleBoard />
      </div>
    )
  }
}

export default Login;
