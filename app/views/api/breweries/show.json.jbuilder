json.partial! "api/breweries/brewery", brewery: @brewery

json.drinks @drinks

if @checkins
    json.checkinIds @checkins.each do |checkin|
        json.id checkin.id
    end
end