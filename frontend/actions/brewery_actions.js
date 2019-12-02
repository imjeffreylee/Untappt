import * as BreweryAPIUtil from "../util/brewery_api_util";

export const RECEIVE_BREWERY = "RECEIVE_BREWERY";
export const RECEIVE_BREWERIES = "RECEIVE_BREWERIES";

export const receiveBrewery = brewery => {
  return {
    type: RECEIVE_BREWERY,
    brewery
  };
}

export const receiveBreweries = breweries => {
  return {
    type: RECEIVE_BREWERIES,
    breweries
  };
}

export const fetchBrewery = id => dispatch => {
  return (BreweryAPIUtil.fetchBrewery(id).then(
    brewery => dispatch(receiveBrewery(brewery))
  ));
}

export const fetchBreweries = () => dispatch => {
  return (BreweryAPIUtil.fetchBreweries().then(
    breweries => dispatch(receiveBreweries(breweries))
  ));
}