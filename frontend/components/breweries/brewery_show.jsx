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
        <p>{this.props.brewery.brewery_name}</p>
      </>
    )
  }
}

export default BreweryShow;