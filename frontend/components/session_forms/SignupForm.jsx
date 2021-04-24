import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = props => {
  const {
    username,
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    update,
    clearErrors,
  } = props

  return (
    <div>
      <p className="brewery-warning">
        Are you a brewery that's trying to get added to Untappt, claim and manage your brewery page, or access your brewery account? Check this out first:
        <a href="#">
          &nbsp;Getting on Untappt: Brewery Guide
        </a>
      </p>
      <p className="all-fields">
        All fields below are required unless specified.
      </p>
      <div className="input-holder">
        <div className="user-email">
          <div className="icon-input-wrapper">
            <i className="fas fa-user"></i>
            <input type="text"
              value={username}
              onChange={update('username')}
              placeholder="Username"
              className="input-username"
            />
          </div>
          <div className="icon-input-wrapper">
            <i className="fas fa-envelope"></i>
            <input type="email"
              value={email}
              onChange={update('email')}
              placeholder="Email Address"
              className="input-email"
            />
          </div>
        </div>
        <p className="password-warning">
          Avoid using common words and include a mix of letters and numbers.
        </p>
        <div className="password-confirm-password">
          <div className="icon-input-wrapper">
            <i className="fas fa-unlock"></i>
            <input type="password"
              value={password}
              onChange={update('password')}
              placeholder="Password"
              className="input-password"
            />
          </div>
          <div className="icon-input-wrapper">
            <i className="fas fa-unlock"></i>
            <input type="password"
              value={confirmPassword}
              onChange={update('confirmPassword')}
              placeholder="Repeat password"
              className="input-password"
            />
          </div>
        </div>
        <div className="first-last-name">
          <div className="icon-input-wrapper">
            <input type="text"
              value={firstName}
              onChange={update('first_name')}
              placeholder="First name"
              className="input-first-name"
            />
          </div>
          <div className="icon-input-wrapper">
            <input type="text"
              value={lastName}
              onChange={update('last_name')}
              placeholder="Last name"
              className="input-last-name"
            />
          </div>
        </div>
      </div>
      <div className="button-holder">
        <button>Create Account</button>
      </div>
      <p className="login-signup-switch">
        Already have an account? <Link to="/login" onClick={clearErrors}>Log in!</Link>
      </p>
    </div>
  )
}

export default SignupForm;