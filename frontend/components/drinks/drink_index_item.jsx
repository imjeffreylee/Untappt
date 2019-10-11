import React from 'react';
import { Link } from 'react-router-dom';

const DrinkIndexItem = ({ drink, brewery }) => {
  return (
    <div className="brew-index-item">
      <li className="brew-index-item-list">
        <img src={window.brewery_index} alt="brewery-index" />
        <div className="brew-index-text">
          <Link to={`/drinks/${drink.id}`}>
            {drink.drink_name}
          </Link>
          <br/>
          <Link to={`/breweries/${drink.brewery_id}`} className="drink-item-brewery">
            {brewery.brewery_name}
          </Link>
          <p>{drink.style}</p>
        </div>
      </li>
    </div>
  );
}

export default DrinkIndexItem;