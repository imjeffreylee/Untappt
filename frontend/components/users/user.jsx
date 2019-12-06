import React from "react";
import CheckinIndex from "../checkins/checkin_index";

class userProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.userId,
    };
  }

  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.fetchUser(userId);
    this.props.fetchCheckins()
      .then(checkins => this.setState(checkins));
      // debugger
  }

  render() {
    if (!this.props.user || !this.state.checkins) {
      return null;
    }

    const allCheckins = Object.values(this.state.checkins);
    const currentUserId = parseInt(this.state.userId);
    const userCheckins = allCheckins.filter(checkin => checkin.checkin.user_id === currentUserId);
    const totalCheckins = userCheckins.length;
    let uniqCheckins;
    let drinkCheckedIn = [];
    userCheckins.forEach(checkin => {
      let drinkId = checkin.checkin.drink_id;
      if (!drinkCheckedIn.includes(drinkId)) {
        drinkCheckedIn.push(drinkId);
      }
    })
    uniqCheckins = drinkCheckedIn.length;
// debugger
    return (
      <>
        <div className="user-page-container">
          <section className="profile-body">
            <div className="create-space"></div>
            <div className="profile-body-header">
              <img src={window.beerProfile} alt="profile" />
              <div className="profile-info">
                <h2>
                  {this.props.user.first_name} {this.props.user.last_name}
                </h2>
                <p>{this.props.user.username}</p>
                <ul className="info-list">
                  <li>
                    <a href="#">{totalCheckins} TOTAL</a>
                  </li>
                  <li>
                    <a href="#">{uniqCheckins} UNIQUE</a>
                  </li>
                  <li>
                    <a href="#">0 BADGES</a>
                  </li>
                  <li>
                    <a href="#">0 FRIENDS</a>
                  </li>
                </ul>
              </div>
            </div>
            <section className="profile-body-content">
              <div className="profile-body-content-container">
                <div className="profile-body-content-main">
                  <div className="profile-body-pic-box">
                    <div className="img-box">
                      <img src={window.fakeDemo1} alt="fake-data-img1" />
                    </div>
                    <div className="img-box">
                      <img src={window.fakeDemo2} alt="fake-data-img2" />
                    </div>
                    <div className="img-box">
                      <img src={window.fakeDemo3} alt="fake-data-img3" />
                    </div>
                    <div className="img-box">
                      <img src={window.fakeDemo4} alt="fake-data-img4" />
                    </div>
                    <div className="img-box">
                      <img src={window.fakeDemo5} alt="fake-data-img5" />
                    </div>
                  </div>
                  <div className="profile-checkin-feeds">
                    <h2>Your Recent Activity</h2>
                    <CheckinIndex
                      checkinUser={this.props.user}
                      checkins={userCheckins}
                      />
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
            </section>
          </section>
        </div>
      </>
    );
  }
}

export default userProfile;