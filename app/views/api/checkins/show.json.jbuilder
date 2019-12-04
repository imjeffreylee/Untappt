# json.set! :checkin do
#   json.partial! "api/checkins/chekin", checkin: @checkin
# end

# json.breweries do
#   @breweries.each do |brewery|
#     json.set! brewery.id do
#       json.partial! "api/breweries/brewery", brewery: brewery
#     end
#   end
# end

# json.drinks do
#   @drinks.each do |drink|
#     json.set! drink.id do
#       json.partial! "api/drinks/drink", drink: drink
#     end
#   end
# end

# json.breweries do
#   debugger
#   @breweries.each do |brewery|
#     json.set! :brewery do
#       json.partial! "api/breweries/brewery", brewery: brewery
#     end
#   end
# end

json.set! :checkin do
  json.partial! "api/checkins/chekin", checkin: @checkin
end

json.drinks do
  @drinks.each do |drink|
    json.set! :drink do
      json.partial! "api/drinks/drink", drink: drink
    end
  end
end

# if @checkins
    # json.breweries @breweries.each do |brewery|
        json.brewery @brewery
    # end

    # json.breweries @breweries.each do |brewery|
        json.drink @drink
    # end
# end