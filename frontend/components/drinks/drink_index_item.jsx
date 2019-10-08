import React from 'react';
import { Link } from 'react-router-dom';

const DrinkIndexItem = ({ drink }) => {
  return (
    <li>
      <Link to={`/drinks/${drink.id}`}>
        {drink.drink_name}
      </Link>
    </li>
  );
}

export default DrinkIndexItem;