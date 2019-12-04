# json.extract! checkin,
#     :id,
#     :user_id,
#     :drink_id,
#     :rating,
#     :review,
#     :created_at
# json.user checkin.user
# json.drink checkin.drink
# json.brewery checkin.drink.brewery

json.checkin do
    json.id checkin.id
    json.user_id checkin.user_id
    json.drink_id checkin.drink_id
    json.rating checkin.rating
    json.review checkin.review
    json.created_at checkin.created_at

    json.user checkin.user
    json.drink checkin.drink
    json.brewery checkin.drink.brewery
end