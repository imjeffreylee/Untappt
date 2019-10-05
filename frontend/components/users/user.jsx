import React from 'react';
import { Link } from 'react-router-dom';

class userProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.userId
    };
  }

  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.fetchUser(userId);
  }

  render() {
    return (
      <>
        <header className="user-profile-header">
          <nav className="user-profile-navbar">
            <div className="nav-container">
              <div className="logo-and-ul">
                <div className="nav-logo josefin">
                  <h1>UNTAPPT</h1>
                  <h6>DRINK SOCIALLY</h6>
                </div>
                <ul>
                  <li>
                    <a href="#">The Pub</a>
                  </li>
                  <li>
                    <a href="#">Breweries</a>
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
                </ul>
              </div>
              <div className="pic-username">                
                <img src={window.beerProfile} alt="profile"/>
                <div className="username-block">
                  <p>{this.props.user.username}</p>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section className="profile-body">
          <div className="create-space"></div>
          <div className="profile-body-header">
            <img src={window.beerProfile} alt="profile" />
            <div className="profile-info">
              <h2>Jeffrey Lee</h2>
              <p>{this.props.user.username}</p>
              <ul className="info-list">
                <li>TOTAL</li>
                <li>UNIQUE</li>
                <li>BADGES</li>
                <li>FRIENDS</li>
              </ul>
            </div>
          </div>
          <section className="profile-body-content">
            <div className="photo-aside-wrapper">
              <div className="profile-body-pic-box">
                <div className="img-box">
                  <img src={window.fakeDemo} alt="fake-data-img"/>
                </div>
                <div className="img-box"></div>
                <div className="img-box"></div>
                <div className="img-box"></div>
                <div className="img-box"></div>
              </div>
              <aside className="profile-sidebar"></aside>
            </div>
            <div className="profile-checkin-feeds"></div>
          </section>
        </section>
      </>
    )
  }
}

export default userProfile;