import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginSignupForm.css';
import logo from '../pics/Pinterest-Wordmark+Badge/RGB/badgeRGB.png';

class LoginSignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signup: false
        };
    }
    render() {
        return (
            <div className="loginsignup-form-shell">
                <div className="loginsignup-form-outer-container">
                    <div className="loginsignup-form-logo-container">
                        <img className="loginsignup-form-logo" alt="logo" src={logo}></img>
                    </div>
                    {!this.state.signup && <div className="loginsignup-form-inner-login-container">
                        <div className="loginsignup-form-login-welcome">Welcome to Pinterest</div>
                        <form className="loginsignup-form-login-form">
                            <input className="loginsignup-form-login-form-username" placeholder="Username"></input>
                            <input
                                className="loginsignup-form-login-form-password"
                                placeholder="Password"
                                type="password"></input>
                           <Link to="/"><button className="loginsignup-form-login-form-submit" type="submit">Log in</button></Link>
                        </form>
                        <div className="loginsignup-form-login-noaccount-container">
                            <div className="loginsignup-form-login-noaccount">Need an account?
                                <span onClick={() => this.setState({signup: true})} className="loginsignup-form-login-noaccount-link">
                                    &nbsp; Sign up
                                </span>
                            </div>
                        </div>
                    </div>
}
                    {this.state.signup && <div className="loginsignup-form-inner-signup-container">
                        <div className="loginsignup-form-signup-welcome">Sign up to see more</div>
                        <form className="loginsignup-form-signup-form">
                            <input
                                className="loginsignup-form-signup-form-firstname"
                                placeholder="First Name"></input>
                            <input
                                className="loginsignup-form-signup-form-lastname"
                                placeholder="Last Name"></input>
                            <input className="loginsignup-form-signup-form-username" placeholder="Username"></input>
                            <input
                                className="loginsignup-form-signup-form-password"
                                placeholder="Password"
                                type="password"></input>
                            <Link to="/"><button className="loginsignup-form-signup-form-submit" type="submit">Sign up</button></Link>
                        </form>
                        <div className="loginsignup-form-signup-existingaccount-container">
                            <div className="loginsignup-form-signup-existingaccount">Already a member?
                                <span onClick={() => this.setState({signup: false})} className="loginsignup-form-signup-existingaccount-link">
                                    &nbsp; Log in
                                </span>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        )
    }
}

export default LoginSignupForm;