import React from 'react';
import { Link } from 'react-router-dom';

const BreweryIndexItem = ({ brewery }) => {
  return (
    <div className="brew-index-item">
      <li className="brew-index-item-list">
        <img src={window.brewery_index} alt="brewery-index"/>
        <div className="brew-index-text">
          <Link to={`/breweries/${brewery.id}`}>
            {brewery.brewery_name}
          </Link>
          <p>{brewery.origin}</p>
          <p>{brewery.brewery_type}</p>
        </div>
      </li>
    </div>
    );
}

export default BreweryIndexItem;