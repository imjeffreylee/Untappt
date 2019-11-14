json.partial! "api/users/user", user: @user

if @checkins 
    json.checkinIds @checkins.each do |checkin|
        json.id checkin.id
    end
end