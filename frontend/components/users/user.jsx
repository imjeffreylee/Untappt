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
    let userId = this.props.match.params.userId
    this.props.fetchUser(userId);
  }

  render() {
    return (
      <header>
        <nav>
          <div className="nav-logo">
            <h1>UNTAPPT</h1>
            <h6>DRINK SOCIALLY</h6>
          </div>
          <ul>
            <li>The Pub</li>
            <li>Breweries</li>
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
          <div className="pic-username">
            <i className="fas fa-user profile"></i>
            <p>{this.props.user.username}</p>
          </div>
        </nav>
      </header>
    )
  }
}

export default userProfile;