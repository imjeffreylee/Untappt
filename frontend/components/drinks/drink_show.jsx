import React from 'react';
import { Link } from 'react-router-dom';

class DrinkShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkId: this.props.match.params.drinkId
    }
  }

  componentDidMount() {
    let drinkId = this.props.match.params.drinkId;
    this.props.fetchDrink(drinkId);
  }

  render() {
    if (!this.props.drink) {
      return null
    }
    
    return (
      <>
        <p>{this.props.drink.drink_name}</p>
      </>
    )
  }
}

export default DrinkShow;