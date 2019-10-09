import React from 'react';
import BreweryIndexItem from './brewery_index_item';
import { Link } from "react-router-dom";

class BreweriesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.userId
    };
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    this.props.fetchBreweries();
  }

  logOut({ logout }) {
    this.props.logout();
  }

  render() {
    const breweries = this.props.breweries.map(brewery => {
      return (
          <BreweryIndexItem
            key={brewery.id}
            brewery={brewery}
          />
      )
    })

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
                </ul>
              </div>
              <div className="pic-username">
                <img src={window.beerProfile} alt="profile" />
                <button className="logout-btn" onClick={this.logOut}>Log Out</button>
              </div>
            </div>
          </nav>
        </header>
        <div>
          <ul>
            {breweries}
          </ul>
        </div>
      </>
    )
  }
}

export default BreweriesIndex;