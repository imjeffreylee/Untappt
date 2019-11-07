import React from 'react';
import merge from "lodash/merge";
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      gender: "",
      country: "",
      birthday: "",
      location: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user);
  }

  handleGuest(e) {
    e.preventDefault();
    const user = merge({}, {
      username: "guest",
      password: "password"
    })
    this.props.processForm(user);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    })
  }

  renderErrors() {
    if (this.props.errors.length !== 0) {
      return (
        <ul className="err-ul">
          {this.props.errors.map((err, i) => {
            return (
              <li key={i} className="err-msg">
                {err} <span>¯\_(ツ)_/¯</span>
              </li>
            )
          })}
        </ul>
      )
    }
  }

  render() {
    if (this.props.formType === "Login") {
      return (
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit} className="login-signup">
            <div className="inner-session-form-container">
              <div className="form-header josefin">
                <Link to="/">
                  <h2>UNTAPPT</h2>
                  <h6>DRINK SOCIALLY</h6>
                </Link>
              </div>
              {this.renderErrors()}
              <a className="guest-user" onClick={this.handleGuest}>Browse as a <span>GUEST</span></a>
              <p className="or">OR</p>
              <div className="input-holder">
                <div className="icon-input-wrapper">
                  <i className="fas fa-user"></i>
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    placeholder="Username"
                    className="input-username"
                  />
                </div>
                <div className="icon-input-wrapper">
                  <i className="fas fa-unlock"></i>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                    className="input-password"
                  />
                </div>
              </div>
              <div className="button-holder">
                <button>{this.props.formType}</button>
              </div>
              <p className="login-signup-switch">
                New around here? <Link to="/signUp" onClick={this.props.clearErrors}>Sign up!</Link>
              </p>
            </div>
          </form>
        </div>
      )
    } else if (this.props.formType === "Sign up") {
      return (
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit} className="signup">
            <div className="inner-signup-form-container">
              <div className="form-header josefin">
                <Link to="/">
                  <h2>UNTAPPT</h2>
                  <h6>DRINK SOCIALLY</h6>
                </Link>
              </div>
              <p className="brewery-warning">
                Are you a brewery that's trying to get added to Untappt, claim and manage your brewery page, or access your brewery account? Check this out first:
                <a href="#">
                  &nbsp;Getting on Untappt: Brewery Guide
                </a>
              </p>
              <p className="all-fields">
                All fields below are required unless specified.
              </p>
              {this.renderErrors()}
              <div className="input-holder">
                <div className="user-email">
                  <div className="icon-input-wrapper">
                    <i className="fas fa-user"></i>
                    <input type="text"
                      value={this.state.username}
                      onChange={this.update('username')}
                      placeholder="Username"
                      className="input-username"
                    />
                  </div>
                  <div className="icon-input-wrapper">
                    <i className="fas fa-envelope"></i>
                    <input type="email"
                      value={this.state.email}
                      onChange={this.update('email')}
                      placeholder="Email Address"
                      className="input-email"
                    />
                  </div>
                </div>
                <div className="password-confirm-password">
                  <div className="icon-input-wrapper">
                    <i className="fas fa-unlock"></i>
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      placeholder="Password"
                      className="input-password"
                    />
                  </div>
                  <div className="icon-input-wrapper">
                    <i className="fas fa-unlock"></i>
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      placeholder="Repeat password"
                      className="input-password"
                    />
                  </div>
                </div>
              </div>
              <div className="button-holder">
                <button>{this.props.formType}</button>
              </div>
              <p className="login-signup-switch">
                Already have an account? <Link to="/login" onClick={this.props.clearErrors}>Log in!</Link>
              </p>
            </div>
          </form>
        </div>
      )
    }
  }
}

export default SessionForm;