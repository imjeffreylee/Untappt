import React from 'react';
import BreweryIndexItem from './brewery_index_item';

class BreweriesIndex extends React.Component {
  componentDidMount() {
    // debugger
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
      <div>
        <ul>
          {breweries}
        </ul>
      </div>
    )
  }
}

export default BreweriesIndex;