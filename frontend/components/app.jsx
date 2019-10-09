import React from 'react'
import GreetingsContainer from "./greetings/greetings_container";
import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";
import UserProfileContainer from "./users/user_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Link, Switch } from "react-router-dom";
import BreweriesIndexContainer from './breweries/brewery_index_container';
import BreweryShowContainer from './breweries/brewery_show_container';
import DrinksIndexContainer from './drinks/drink_index_container';
import DrinkShowContainer from './drinks/drink_show_container';

const App = () => (
  <>
    <Switch>
      <ProtectedRoute exact path="/drinks/:drinkId" component={DrinkShowContainer} />
      <ProtectedRoute exact path="/drinks" component={DrinksIndexContainer} />
      <ProtectedRoute exact path="/breweries/:breweryId" component={BreweryShowContainer} />
      <ProtectedRoute exact path="/breweries" component={BreweriesIndexContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <GreetingsContainer exact path="/" component={GreetingsContainer} />
    </Switch>
  </>
);

export default App;