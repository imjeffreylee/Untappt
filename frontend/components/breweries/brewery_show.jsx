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

    return (
      <>
        <section className="profile-body">
          <div className="create-space"></div>
          <div className="brewery-list-container">
            <div className="brewery-list-body">
              <div className="brew-show-info-container">
                <img src={window.brewery_index} alt="Brew_show"/>
                <div className="brew-show-info">
                  <h2>{this.props.brewery.brewery_name}</h2>
                  <p className="brew-type">{this.props.brewery.brewery_type}</p>
                  <p className="brew-ori">{this.props.brewery.origin}</p>
                </div>
              </div>
              <div className="desc-container">
                <p>{this.props.brewery.brewery_description}</p>
              </div>
            </div>
            <aside className="brewery-list-sidebar"></aside>
          </div>
        </section>
      </>
    )
  }
}

export default BreweryShow;