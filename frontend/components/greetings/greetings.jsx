import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div className="greeting-block">
        <h2 className="greeting-user">Hi, {currentUser.username}!</h2>
        <button className="user-logout" onClick={logout}>Log Out</button>
      </div>
    )
  } else {
    return (
      <nav className="login-signup">
        <Link to="/login">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup">Sign up</Link>
      </nav>
    )
  }
}

export default Greeting;