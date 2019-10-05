import React from 'react'
import GreetingsContainer from "./greetings/greetings_container";
import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";
import UserProfileContainer from "./users/user_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Link, Switch } from "react-router-dom";

const App = () => (
  <>
    <Switch>
      <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <GreetingsContainer exact path="/" component={GreetingsContainer} />
    </Switch>
  </>
);

export default App;