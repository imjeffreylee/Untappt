import React from 'react';
import BreweryIndexItem from './brewery_index_item';
import { Link } from "react-router-dom";

class BreweriesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.userId
    };
  }

  componentDidMount() {
    this.props.fetchBreweries();
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
        <section className="profile-body">
          <div className="create-space"></div>
          <div className="brewery-list-container">
            <div className="brewery-list-body">
              <div className="brew-topic-p">
                <h3>Top Rated Breweries</h3>
                <p>
                  The list shows the top breweries, based on our weighted average formula, which effectively rates all breweries against each-other and gives weight to their beers with higher rating count. A brewery must have at least 1,000 ratings and at least 5 beers in their portfolio to qualify for this list. For more information on our rating system, please view <a href="https://help.untappd.com/support/solutions/articles/25000001968-how-are-ratings-determined-on-untappd-" target="_blank">our ratings explainer</a>.
                </p>
              </div>
              <ul className="brew-list-container">
                {breweries}
              </ul>
            </div>
            <aside className="brewery-list-sidebar">

            </aside>
          </div>
        </section>
      </>
    )
  }
}

export default BreweriesIndex;