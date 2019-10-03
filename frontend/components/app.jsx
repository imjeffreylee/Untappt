import React from 'react'
import GreetingsContainer from "./greetings/greetings_container";
import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";
import { Route, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <GreetingsContainer />
    </header>
    <br/>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/login" component={LoginFormContainer} />
  </div>
);

export default App;