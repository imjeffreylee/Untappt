import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = () => {
  return (
    <div className="masthead">
      <nav className="nav-login-signup">
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
              <a href="https://github.com/imjeffreylee" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/jeffrey-lee-22b94196/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
          </div>
        </div>
        <img className="greeting-phone" src={window.phoneURL} alt="phone"/>
      </div>
    </div>
  )
}

export default Greeting;