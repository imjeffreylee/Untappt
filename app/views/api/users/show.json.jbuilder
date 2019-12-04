json.partial! "api/users/user", user: @user

if @checkins
    json.checkins @checkins.each do |checkin|
        json.id checkin
    end
end

# json.checkins do
#     @checkins.each do |checkin|
#         json.set! checkin.id do
#             json.partial! "api/checkins/checkin", checkin: checkin
#         end
#     end
# end