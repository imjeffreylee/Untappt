import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut({ logout }) {
    this.props.logout();
  }

  render() {
    if (!this.props.user) {
      return null;
    }

    return (
      <>
        <header className="user-profile-header">
          <nav className="user-profile-navbar">
            <div className="nav-container">
              <div className="logo-and-ul">
                <div className="nav-logo josefin">
                  <Link to={`/users/${this.props.user.id}`}>
                    <h1>UNTAPPT</h1>
                    <h6>DRINK SOCIALLY</h6>
                  </Link>
                </div>
                <ul>
                  <li>
                    <Link to="/checkins">The Pub</Link>
                  </li>
                  <li>
                    <Link to="/breweries">Breweries</Link>
                  </li>
                  <li>
                    <Link to="/drinks">Beers</Link>
                  </li>
                  <li>
                    <a href="https://github.com/imjeffreylee" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/jeffrey-lee-22b94196/" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://angel.co/jeffrey-lee-12" target="_blank">
                      <i className="fab fa-angellist"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pic-username">
                <Link to={`/users/${this.props.user.id}`}>
                  <img src={window.beerProfile} alt="profile" />
                </Link>
                <a className="logout-btn" onClick={this.logOut}>Log Out</a>
              </div>
            </div>
          </nav>
        </header>
      </>
    )
  }
}

export default Navbar;