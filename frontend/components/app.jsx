import React from 'react'
import GreetingsContainer from "./greetings/greetings_container";
import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";
import { Route, Link } from "react-router-dom";

const App = () => (
  <div>
    <header>
      <Link to='/'>
        <h1>Untappt</h1>
      </Link>
      <GreetingsContainer />
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;