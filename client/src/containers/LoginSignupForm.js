import React, {Component} from 'react';
import './LoginSignupForm.css';
import logo from '../pics/Pinterest-Wordmark+Badge/RGB/badgeRGB.png';

class LoginSignupForm extends Component {
    render() {
        return (
            <div className="loginsignup-form-shell">
                <div className="loginsignup-form-outer-container">
                    <div className="loginsignup-form-logo-container">
                        <img className="loginsignup-form-logo" alt="logo" src={logo}></img>
                    </div>
                    <div className="loginsignup-form-inner-login-container">
                        <div className="loginsignup-form-login-welcome">Welcome to Pinterest</div>
                        <form className="loginsignup-form-login-form">
                            <input className="loginsignup-form-login-form-username" placeholder="Username"></input>
                            <input
                                className="loginsignup-form-login-form-password"
                                placeholder="Password"
                                type="password"></input>
                            <button className="loginsignup-form-login-form-submit" type="submit">Log in</button>
                        </form>
                        <div className="loginsignup-form-login-noaccount-container">
                            <div className="loginsignup-form-login-noaccount">Need an account? <span> &nbsp;
                                    <a href="#" className="loginsignup-form-login-noaccount-link">Sign up</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/*<div className="loginsignup-form-inner-signup-container">
                        <div className="loginsignup-form-signup-welcome">Sign up to see more</div>
                        <form className="loginsignup-form-signup-form">
                            <input className="loginsignup-form-signup-form-firstname" placeholder="First Name"></input>
                            <input className="loginsignup-form-signup-form-lastname" placeholder="Last Name"></input>
                            <input className="loginsignup-form-signup-form-username" placeholder="Username"></input>
                            <input
                                className="loginsignup-form-signup-form-password"
                                placeholder="Password"
                                type="password"></input>
                            <button className="loginsignup-form-signup-form-submit" type="submit">Log in</button>
                        </form>
                        <div className="loginsignup-form-signup-noaccount-container">
                            <div className="loginsignup-form-signup-noaccount">Already a member? 
                                <span> &nbsp;
                                    <a href="#" className="loginsignup-form-signup-noaccount-link">Log in</a>
                                </span>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>
        )
    }
}

export default LoginSignupForm;