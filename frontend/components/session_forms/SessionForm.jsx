import React from 'react';
import merge from "lodash/merge";
import { Link } from 'react-router-dom';

import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
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
    this.update = this.update.bind(this);
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
    });

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
    const { formType, clearErrors } = this.props;
    const {
      username,
      password,
      email,
      confirmPassword,
      firstName,
      lastName,
    } = this.state;

    const formToShow = (formType === "Login") ?
      <LoginForm
        username={username}
        password={password}
        update={this.update}
        clearErrors={clearErrors}
      /> :
      <SignupForm
        username={username}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        firstName={firstName}
        lastName={lastName}
        update={this.update}
        clearErrors={clearErrors}
      />

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
            {formToShow}
          </div>
        </form>
      </div>
    )
  }
}

export default SessionForm;