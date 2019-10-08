import React from "react";
import DrinkIndexItem from "./drink_index_item";

class DrinksIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDrinks();
  }

  render() {
    const drinks = this.props.drinks.map(drink => {
      return (
        <DrinkIndexItem
          key={drink.id}
          drink={drink}
        />
      )
    })

    return (
      <div>
        <ul>
          {drinks}
        </ul>
      </div>
    )
  }
}

export default DrinksIndex;