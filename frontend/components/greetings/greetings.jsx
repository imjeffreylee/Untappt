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
      <div className="masthead">
        <nav className="login-signup">
          <Link className="nav-login" to="/login">Sign in</Link>
          <Link className="nav-signup" to="/signup">Create an account</Link>
        </nav>
        <div className="greeting-block">
          <div className="greeting-text-block">
            <h1>UNTAPPT</h1>
            <h6>DRINK SOCIALLY</h6>
            <div className="yellow-bar"></div>
            <p>Discover and share your favorite beer.</p>
            <i class="fab fa-apple"></i>
            <i class="fab fa-android"></i>
          </div>
          <img src={window.phoneURL} alt="img"/>
        </div>
      </div>
    )
  }
}

export default Greeting;