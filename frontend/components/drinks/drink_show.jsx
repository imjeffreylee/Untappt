import React from 'react';
import { Link } from 'react-router-dom';
import CheckinIndex from "../checkins/checkin_index";
import ModalContainer from "../modals/modal";

class DrinkShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkId: this.props.match.params.drinkId
    }
  }

  componentDidMount() {
    let drinkId = this.props.match.params.drinkId;
    this.props.fetchDrink(drinkId);
    this.props.fetchCheckins();
  }

  render() {
    if (!this.props.drink || this.props.checkins.length === 0) {
      return null
    }

    let drinkId = parseInt(this.props.match.params.drinkId);
    const allCheckins = this.props.checkins;
    const drinkCheckins = allCheckins.filter(checkin => checkin.checkin.drink_id === drinkId);

    let sum = 0;
    drinkCheckins.forEach(checkin => {
      sum += checkin.checkin.rating;
    })
    const totalRatings = drinkCheckins.length;
    const avgRating = (sum / totalRatings).toFixed(2);

    let bitterness = this.props.drink.IBU;
    if (this.props.drink.IBU === 0) {
      bitterness = "N/A";
    }

    window.scrollTo(0, 0);

    return (
      <>
        <ModalContainer
          drink={this.props.drink}
        />
        <section className="profile-body">
          <div className="create-space"></div>
          <div className="brewery-list-container">
            <div className="brew-show-body">
              <div className="brew-info-and-desc">
                <div className="brew-show-info-container">
                  <img src={window.brewery_index} alt="Brew_show" />
                  <div className="brew-show-info">
                    <h2>{this.props.drink.drink_name}</h2>
                    <Link to={`/breweries/${this.props.drink.brewery_id}`}>
                      {this.props.brewery.brewery_name}
                    </Link>
                    <p className="drink-type">{this.props.drink.style}</p>
                  </div>
                </div>
                <div className="rating-and-beer">
                  <div className="brew-rating-avg">
                    <p>{this.props.drink.ABV}% ABV</p>
                  </div>
                  <div className="brew-rating-total">
                    <p>{bitterness} IBU</p>
                  </div>
                  <div className="total-beer">
                    <p>Rating <span>{avgRating}</span> / 5</p>
                  </div>
                  <div className="claimed">
                    <p>{totalRatings} Ratings</p>
                  </div>
                </div>
                <div className="desc-links-container">
                  <p>{this.props.drink.description}</p>
                  <div className="drink-links">
                    <a title="Check-in this beer" onClick={() => this.props.launchModal("checkin")}>
                      <i className="fas fa-check"></i>
                    </a>
                    <a title="Add to list">
                      <i className="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="brew-photo-box">
                <div>
                  <img src={window.brew_photo_1} alt="brew_photo_1" />
                </div>
                <div>
                  <img src={window.brew_photo_2} alt="brew_photo_2" />
                </div>
                <div>
                  <img src={window.brew_photo_3} alt="brew_photo_3" />
                </div>
                <div>
                  <img src={window.brew_photo_4} alt="brew_photo_4" />
                </div>
                <div>
                  <img src={window.brew_photo_5} alt="brew_photo_5" />
                </div>
              </div>
              <div className="brew-activity-box">
                <h2>Global Recent Activity</h2>
                <CheckinIndex
                  checkins={drinkCheckins}
                />
              </div>
            </div>
            <aside className="brewery-list-sidebar">
              <div className="edit-delete">
                <p>Propose Edit</p>
                <p>Propose Duplicate</p>
              </div>
              <div className="loyal-drinker-box">
                <div>
                  <p>Loyal Drinkers</p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </>
    )
  }
}

export default DrinkShow;