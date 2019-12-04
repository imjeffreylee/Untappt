import React from "react";
import DrinkIndexItem from "./drink_index_item";

class DrinksIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDrinks();
  }

  render() {
    if (!this.props.drinks) {
      return null;
    }
    const drinks = this.props.drinks.map(drink => {
      return (
        <DrinkIndexItem
          key={drink.id}
          drink={drink}
          brewery={this.props.breweries[drink.brewery_id]}
        />
      )
    })

    return (
      <section className="profile-body">
        <div className="create-space"></div>
        <div className="brewery-list-container">
          <div className="brewery-list-body">
            <div className="brew-topic-p">
              <h3>Top Rated Beers</h3>
              <p>
                The list shows the top beers, based on our weighted average formula, which effectively rates all beers against each-other. A beer must have 150 ratings or more to qualify for this list. For more information on our rating system, please view <a href="https://help.untappd.com/support/solutions/articles/25000001968-how-are-ratings-determined-on-untappd-" target="_blank">our ratings explainer</a>.
              </p>
            </div>
            <ul className="brew-list-container">
              {drinks}
            </ul>
          </div>
          <aside className="brewery-list-sidebar">

          </aside>
        </div>
      </section>
    )
  }
}

export default DrinksIndex;