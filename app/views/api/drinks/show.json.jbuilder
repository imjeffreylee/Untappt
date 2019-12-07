json.set! :drink do
  json.partial! "api/drinks/drink", drink: @drink
end

# json.set! :brewery do
#   json.partial! "api/breweries/brewery", brewery: @brewery
# end

json.breweries do
  @breweries.each do |brewery|
    json.set! brewery.id do
      json.partial! "api/breweries/brewery", brewery: brewery
    end
  end
end

json.checkins do
  @checkins.each do |checkin|
    json.set! checkin.id do
      json.partial! "api/checkins/checkin", checkin: checkin
    end
  end
end