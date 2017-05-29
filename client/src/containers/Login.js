import React, {Component} from 'react';

import './Login.css';

import LoginSignupForm from './LoginSignupForm';



class Login extends Component {


  render() {

    return (
      <div className="login-container">
        <LoginSignupForm/>

      </div>
    )
  }
}

export default Login;
