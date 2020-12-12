import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = props => {
  const {
    username,
    password,
    update,
    clearErrors,
  } = props

  return (
    <div>
      <div className="input-holder">
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
          <i className="fas fa-unlock"></i>
          <input type="password"
            value={password}
            onChange={update('password')}
            placeholder="Password"
            className="input-password"
          />
        </div>
      </div>
      <div className="button-holder">
        <button>Log in</button>
      </div>
      <p className="login-signup-switch">
        New around here? <Link to="/signup" onClick={clearErrors}>Sign up!</Link>
      </p>
    </div>
  )
}

export default LoginForm;