import React from 'react';
import { Link } from 'react-router-dom';

class BreweryShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breweryId: this.props.match.params.breweryId
    }
  }

  componentDidMount() {
    let breweryId = this.props.match.params.breweryId;
    this.props.fetchBrewery(breweryId);
  }

  render() {
    if (!this.props.brewery) {
      return null
    }
// debugger
    return (
      <>
        <section className="profile-body">
          <div className="create-space"></div>
          <div className="brewery-list-container">
            <div className="brew-show-body">
              <div className="brew-info-and-desc">
                <div className="brew-show-info-container">
                  <img src={window.brewery_index} alt="Brew_show"/>
                  <div className="brew-show-info">
                    <h2>{this.props.brewery.brewery_name}</h2>
                    <p className="brew-type">{this.props.brewery.brewery_type}</p>
                    <p className="brew-ori">{this.props.brewery.origin}</p>
                  </div>
                </div>
                <div className="rating-and-beer">
                  <div className="brew-rating-avg">
                    <p>Rating 3.45</p>
                  </div>
                  <div className="brew-rating-total">
                    <p>5,047,532 Ratings</p>
                  </div>
                  <div className="total-beer">
                    <Link to="/drinks">764 Beers</Link>
                  </div>
                  <div className="claimed">
                    <img src={window.brew_claimed} alt="claimed"/>
                  </div>
                </div>
                <div className="desc-links-container">
                  <p>{this.props.brewery.brewery_description}</p>
                  <div className="brew-links">
                  </div>
                </div>
              </div>
              <div className="brew-photo-box">
                <div>
                  <img src={window.brew_photo_1} alt="brew_photo_1"/>
                </div>
                <div>
                  <img src={window.brew_photo_2} alt="brew_photo_2"/>
                </div>
                <div>
                  <img src={window.brew_photo_3} alt="brew_photo_3"/>
                </div>
                <div>
                  <img src={window.brew_photo_4} alt="brew_photo_4"/>
                </div>
                <div>
                  <img src={window.brew_photo_5} alt="brew_photo_5"/>
                </div>
              </div>
              <div className="brew-activity-box">
                <h2>Global Recent Activity</h2>
              </div>
            </div>
            <aside className="brewery-list-sidebar">
              <div className="edit-delete">
                <p>Propose Edit</p>
                <p>Propose Duplicate</p>
              </div>
              <div className="people-like-brew">
                <div>
                  <p className="people-like-brew-num">187,576</p>
                  <p>PEOPLE LIKE THIS BREWERY</p>
                </div>
                <a className="like-this-brew">Like This Brewery</a>
              </div>
            </aside>
          </div>
        </section>
      </>
    )
  }
}

export default BreweryShow;