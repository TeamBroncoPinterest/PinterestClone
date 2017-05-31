import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import { Redirect} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import {createUser, validateLogin} from '../actions/userActions';
import './LoginSignupForm.css';
import logo from '../pics/Pinterest-Wordmark+Badge/RGB/badgeRGB.png';

class LoginSignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signup: false
        };
    }


    login = (values) => {
        this.props.validateLogin(values);
    }


    signup = (values) => {
        this.props.createUser(values);
    }


    render() {

        if (this.props.user.loggedIn) {
            return <Redirect to="/" />
        }

        const {handleSubmit} = this.props;
        return (
            <div className="loginsignup-form-shell">
                <div className="loginsignup-form-outer-container">
                    <div className="loginsignup-form-logo-container">
                        <img className="loginsignup-form-logo" alt="logo" src={logo}></img>
                    </div>
                    {!this.state.signup && <div className="loginsignup-form-inner-login-container">
                        <div className="loginsignup-form-login-welcome">Welcome to Pinterest</div>
                        <div className="login-catologofideas">The world&#8217;s catalog of ideas</div>
                        <form onSubmit={handleSubmit(this.login)} className="loginsignup-form-login-form">
                            <Field
                                className="loginsignup-form-login-form-username"
                                placeholder="Username"
                                type="text"
                                name="username"
                                component="input"/>
                            <Field
                                className="loginsignup-form-login-form-password"
                                placeholder="Password"
                                type="password"
                                name="password"
                                component="input"/>
                                <button className="loginsignup-form-login-form-submit" type="submit">Log in</button>
                        </form>
                        <div className="loginsignup-form-login-noaccount-container">
                            <div className="loginsignup-form-login-noaccount">Need an account?
                                <span
                                    onClick={() => this.setState({signup: true})}
                                    className="loginsignup-form-login-noaccount-link">
                                    &nbsp; Sign up
                                </span>
                            </div>
                        </div>
                    </div>
}
                    {this.state.signup && <div className="loginsignup-form-inner-signup-container">
                        <div className="loginsignup-form-signup-welcome">Sign up to see more</div>
                        <form className="loginsignup-form-signup-form" onSubmit={handleSubmit(this.signup)}>
                            <Field
                                className="loginsignup-form-signup-form-firstname"
                                placeholder="First Name"
                                type="text"
                                name="firstname"
                                component="input"/>
                            <Field
                                className="loginsignup-form-signup-form-lastname"
                                placeholder="Last Name"
                                type="text"
                                name="lastname"
                                component="input"/>
                            <Field
                                className="loginsignup-form-signup-form-username"
                                placeholder="Username"
                                type="text"
                                name="username"
                                component="input"/>
                            <Field
                                className="loginsignup-form-signup-form-password"
                                placeholder="Password"
                                type="password"
                                name="password"
                                component="input"/>
                                <button className="loginsignup-form-signup-form-submit" type="submit">Sign up</button>
                        </form>
                        <div className="loginsignup-form-signup-existingaccount-container">
                            <div className="loginsignup-form-signup-existingaccount">Already a member?
                                <span
                                    onClick={() => this.setState({signup: false})}
                                    className="loginsignup-form-signup-existingaccount-link">
                                    &nbsp; Log in
                                </span>
                            </div>
                        </div>
                    </div>
                  }
                </div>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        loginForm: store.form,
        user: store.user
}
}
LoginSignupForm = reduxForm({form: "loginForm"})(LoginSignupForm)

export default connect(mapStateToProps, { createUser, validateLogin })(LoginSignupForm);
