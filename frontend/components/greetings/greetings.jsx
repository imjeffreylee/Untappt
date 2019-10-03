import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = () => {
  return (
    <div className="masthead">
      <nav className="login-signup">
        <Link className="nav-login" to="/login">Sign in</Link>
        <Link className="nav-signup" to="/signup">Create an account</Link>
      </nav>
      <div className="greeting-block">
        <div className="greeting-text-block josefin">
          <i className="fab fa-untappd"></i>
          <h1>UNTAPPT</h1>
          <h6>DRINK SOCIALLY</h6>
          <div className="yellow-bar"></div>
          <p>Discover and share your favorite beer.</p>
          <div className="icon-block">
            <span>
              <i className="fab fa-apple"></i>
            </span>
            <span>
              <i className="fab fa-android"></i>
            </span>
          </div>
        </div>
        <img src={window.phoneURL} alt="img"/>
      </div>
    </div>
  )
}

export default Greeting;