import React from 'react'
import GreetingsContainer from "./greetings/greetings_container";
import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Link, Switch } from "react-router-dom";

const App = () => (
  <>
    <Switch>
      <GreetingsContainer exact path="/" component={GreetingsContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/login" component={LoginFormContainer} />
    </Switch>
  </>
);

export default App;