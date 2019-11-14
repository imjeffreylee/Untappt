json.extract! checkin,
    :id,
    :user_id,
    :drink_id,
    :rating,
    :review

json.user checkin.user
json.drink checkin.drink
json.brewery checkin.drink.brewery