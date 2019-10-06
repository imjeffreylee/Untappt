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
    if (this.props.errors) {
      return (
        <ul>
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
                <h2>UNTAPPT</h2>
                <h6>DRINK SOCIALLY</h6>
              </div>
              {this.renderErrors()}
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
                Not with us yet? <Link to="/signUp" onClick={this.props.clearErrors}>Sign up</Link>
              </p>
              <p className="guest-user">
                or <a onClick={this.handleGuest}>try it as a guest</a>
              </p>
            </div>
          </form>
        </div>
      )
    } else if (this.props.formType === "Sign up") {
      return (
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit} className="login-signup">
            <div className="inner-session-form-container">
              <div className="form-header josefin">
                <h2>UNTAPPT</h2>
                <h6>DRINK SOCIALLY</h6>
              </div>
              {this.renderErrors()}
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
                Already have an account? <Link to="/login" onClick={this.props.clearErrors}>Log in</Link>
              </p>
            </div>
          </form>
        </div>
      )
    }
  }
}

export default SessionForm;