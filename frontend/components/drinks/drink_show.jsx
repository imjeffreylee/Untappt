import React from 'react';
import { Link } from 'react-router-dom';

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
  }

  render() {
    if (!this.props.drink) {
      return null
    }
    
    return (
      <>
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
                    <p>{this.props.drink.IBU} IBU</p>
                  </div>
                  <div className="total-beer">
                    <p>Rating 3.6</p>
                  </div>
                  <div className="claimed">
                    <p>360,717 Ratings</p>
                  </div>
                </div>
                <div className="desc-links-container">
                  <p>{this.props.drink.description}</p>
                  <div className="drink-links">
                    <a title="Check-in this beer">
                      <i class="fas fa-check"></i>
                    </a>
                    <a title="Add to list">
                      <i class="fas fa-plus"></i>
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