import React, {Component} from 'react';

import './Login.css';
import CreateBoard from './CreateBoard';
import LoginSignupForm from './LoginSignupForm';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false
    }
  }

  render() {

    return (
      <div className="login-container">
        <LoginSignupForm/>
      </div>
    )
  }
}

export default Login;
