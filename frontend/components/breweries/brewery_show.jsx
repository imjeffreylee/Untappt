import React from 'react';
import { Link } from 'react-router-dom';
import CheckinIndex from "../checkins/checkin_index";
import DrinksIndexItem from "../drinks/drink_index_item";

class BreweryShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breweryId: this.props.match.params.breweryId,
      showDrinks: false
    }
  }

  componentDidMount() {
    let breweryId = this.props.match.params.breweryId;
    this.props.fetchBrewery(breweryId);
    this.props.fetchCheckins();
    this.props.fetchDrinks();
  }

  render() {
    if (!this.props.brewery || this.props.checkins.length === 0 || this.props.drinks.length === 0) {
      return null
    }

    const breweryId = parseInt(this.state.breweryId);
    const brewDrinks = this.props.drinks.filter(drink => drink.brewery_id === breweryId);
    const brewCheckins = this.props.checkins.filter(checkin => checkin.checkin.brewery.id === breweryId);
    
    let sum = 0;
    brewCheckins.forEach(checkin => sum += checkin.checkin.rating);
    let avgRating = (sum / brewCheckins.length).toFixed(2);
    if (brewCheckins.length === 0) avgRating = "N/A";

    let checkinsOrDrinks;
    let linkDrinksOrCheckins;
    let linkToCreateDrink;
    if (this.state.showDrinks) {
      checkinsOrDrinks = brewDrinks.map(brewDrink => {
        return (
          <div key={brewDrink.id}>
            <DrinksIndexItem
              drink={brewDrink}
              brewery={this.props.brewery}
            />
          </div>
        )
      });

      linkDrinksOrCheckins = (
        <a onClick={() => this.setState({ showDrinks: false })}>All Checkins</a>
      );

      linkToCreateDrink = (
        <div className="add-beer">
          <p>Don't see the beer you're looking for?</p>
          <Link to={`/breweries/${this.props.brewery.id}/new_drink`}>You can add it here</Link>
        </div>
      )
    } else {
      checkinsOrDrinks = (
        <div>
          <h2>Global Recent Activity</h2>
          <CheckinIndex
            checkins={brewCheckins}
          />
        </div>
      );

      linkDrinksOrCheckins = (
        <a onClick={() => this.setState({ showDrinks: true })}>{brewDrinks.length} Beers</a>
      );
    }

    window.scrollTo(0, 0);

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
                    <p>Rating <span>{avgRating}</span> / 5</p>
                  </div>
                  <div className="brew-rating-total">
                    <p>{brewCheckins.length} Ratings</p>
                  </div>
                  <div className="total-beer">
                    {linkDrinksOrCheckins}
                  </div>
                  <div className="claimed">
                    <img src={window.brew_claimed}
                      alt="claimed"
                      title="This brewery has been claimed and is officially managed."
                      />
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
                <h2>Beer List</h2>
                {checkinsOrDrinks}
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
                <span className="like-this-brew">Like This Brewery</span>
              </div>
              {linkToCreateDrink}
            </aside>
          </div>
        </section>
      </>
    )
  }
}

export default BreweryShow;