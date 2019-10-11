json.drinks do
  @drinks.each do |drink|
    json.set! drink.id do
      json.partial! "api/drinks/drink", drink: drink
    end
  end
end

json.breweries do
  @breweries.each do |brewery|
    json.set! brewery.id do
      json.partial! "api/breweries/brewery", brewery: brewery
    end
  end
end