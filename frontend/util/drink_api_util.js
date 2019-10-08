export const fetchDrinks = () =>
  $.ajax({
    method: "get",
    url: "api/drinks"
  });

export const fetchDrink = id =>
  $.ajax({
    method: "get",
    url: `api/drinks/${id}`
  });

export const createDrink = drink =>
  $.ajax({
    method: "post",
    url: `api/drinks/`,
    data: { drink }
  });

export const updateDrink = drink =>
  $.ajax({
    method: "post",
    url: `api/drinks/${drink.id}`,
    data: { drink }
  });
