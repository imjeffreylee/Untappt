import React from 'react'
import GreetingsContainer from "./greetings/greetings_container";
import LoginFormContainer from "./session_forms/LoginFormContainer";
import SignupFormContainer from "./session_forms/SignupFormContainer";
import UserProfileContainer from "./users/user_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import BreweriesIndexContainer from './breweries/brewery_index_container';
import BreweryShowContainer from './breweries/brewery_show_container';
import DrinksIndexContainer from './drinks/drink_index_container';
import DrinkShowContainer from './drinks/drink_show_container';
import Navbar from './navbars/navbar_container';
import DrinkFormContainer from "./drinks/drink_form";

const App = () => (
  <>
    <Navbar />
    <Switch>
      <ProtectedRoute exact path="/drinks/:drinkId" component={DrinkShowContainer} />
      <ProtectedRoute exact path="/drinks" component={DrinksIndexContainer} />
      <ProtectedRoute exact path="/breweries/:breweryId/new_drink" component={DrinkFormContainer} />
      <ProtectedRoute exact path="/breweries/:breweryId" component={BreweryShowContainer} />
      <ProtectedRoute exact path="/breweries" component={BreweriesIndexContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/" component={GreetingsContainer} />
    </Switch>
  </>
);

export default App;