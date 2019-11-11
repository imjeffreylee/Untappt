import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../navbars/navbar_container";

class userProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.userId
    };
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.fetchUser(userId);
  }

  logOut({ logout }) {
    this.props.logout();
  }

  render() {
    if (!this.props.user) {
      return null
    }

    return (
      <>
        <div className="user-page-container">
          <section className="profile-body">
            <div className="create-space"></div>
            <div className="profile-body-header">
              <img src={window.beerProfile} alt="profile" />
              <div className="profile-info">
                <h2>{this.props.user.first_name} {this.props.user.last_name}</h2>
                <p>{this.props.user.username}</p>
                <ul className="info-list">
                  <li><a href="#">TOTAL</a></li>
                  <li><a href="#">UNIQUE</a></li>
                  <li><a href="#">BADGES</a></li>
                  <li><a href="#">FRIENDS</a></li>
                </ul>
              </div>
            </div>
            <section className="profile-body-content">
              <div className="photo-aside-wrapper">
                <div className="profile-body-pic-box">
                  <div className="img-box">
                    <img src={window.fakeDemo1} alt="fake-data-img1"/>
                  </div>
                  <div className="img-box">
                    <img src={window.fakeDemo2} alt="fake-data-img2" />
                  </div>
                  <div className="img-box">
                    <img src={window.fakeDemo3} alt="fake-data-img3"/>
                  </div>
                  <div className="img-box">
                    <img src={window.fakeDemo4} alt="fake-data-img4" />
                  </div>
                  <div className="img-box">
                    <img src={window.fakeDemo5} alt="fake-data-img5" />
                  </div>
                </div>
                <aside className="profile-sidebar">
                  <div className="profile-lists-container">
                    <div className="profile-lists">
                      <h3>Lists</h3>
                    </div>
                  </div>
                  <div className="profile-events-container">
                    <div className="profile-your-events">
                      <h3>Your Events</h3>
                    </div>
                  </div>
                  <div className="profile-events-container">
                    <div className="profile-top-beers">
                      <h3>Top Beers</h3>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="profile-checkin-feeds"></div>
            </section>
          </section>
        </div>
      </>
    )
  }
}

export default userProfile;