export const fetchBreweries = () =>
  $.ajax({
    method: "get",
    url: "api/breweries"
  });

export const fetchBrewery = id =>
  $.ajax({
    method: "get",
    url: `api/breweries/${id}`
  });

export const createBrewery = brewery =>
  $.ajax({
    method: "post",
    url: `api/breweries/`,
    data: { brewery }
  });

export const updateBrewery = brewery =>
  $.ajax({
    method: "patch",
    url: `api/breweries/${brewery.id}`,
    data: { brewery }
  });
