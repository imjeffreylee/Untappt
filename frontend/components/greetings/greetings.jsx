import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = () => {
  return (
    <div className="greeting-container">
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
                <a title="GitHub" href="https://github.com/imjeffreylee/Untappt" target="_blank">
                  <i className="home-icon fab fa-github"></i>
                </a>
              </span>
              <span>
                <a title="LinkedIn" href="https://www.linkedin.com/in/jeffrey-shian-chang-lee/" target="_blank">
                  <i className="home-icon fab fa-linkedin-in"></i>
                </a>
              </span>
              <span>
                <a title="AngelList" href="https://angel.co/jeffrey-lee-12" target="_blank">
                  <i className="home-icon fab fa-angellist"></i>
                </a>
              </span>
              <span>
                <a title="Portfolio" href="https://imjeffreylee.github.io/" target="_blank">
                  <i className="home-icon fas fa-portrait"></i>
                </a>
              </span>
            </div>
          </div>
          <img className="greeting-phone" src={window.phoneURL} alt="phone"/>
        </div>
      </div>
      <footer className="greeting-footer">
        <div className="footer-nav">
          
            <ul className="footer-menu-list">
              <li><Link to="/">Home</Link></li>
              {/* <li><Link to="/">The Pub</Link></li> */}
              <li><Link to="/breweries">Breweries</Link></li>
              <li><Link to="/drinks">Beers</Link></li>
              <li>
                <a href="https://github.com/imjeffreylee/Untappt" target="_blank">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jeffrey-shian-chang-lee/" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a href="https://angel.co/jeffrey-lee-12" target="_blank">AngelList</a>
              </li>
              <li>
                <a href="https://imjeffreylee.github.io/" target="_blank" className="JL-logo">
                  <img src={window.JL_logo} alt="logo" className="JL-logo-image"/>
                  Personal Site
                </a>
              </li>
            </ul>
            <p>© Untappt 2019</p>

        </div>
      </footer>
    </div>
  )
}

export default Greeting;