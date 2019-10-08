import React from 'react';
import { Link } from 'react-router-dom';

const BreweryIndexItem = ({ brewery }) => {
  return (
    <li>
      <Link to={`/breweries/${brewery.id}`}>
        {brewery.brewery_name}
      </Link>
    </li>
    );
}

export default BreweryIndexItem;