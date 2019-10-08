import { combineReducers } from "redux";
import users from "./users_reducer";
import breweries from "./breweries_reducer"

export default combineReducers({
  users,
  breweries
});
