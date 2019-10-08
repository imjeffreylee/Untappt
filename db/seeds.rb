# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
guest = User.create(
  username: "guest",
  password: "password",
  location: "Taipei",
  email: "drinkmore@untappt.com",
  first_name: "Guest",
  last_name: "User",
  gender: "Prefer not to say",
  country: "Taiwan, ROC",
  birthday: "01/01/1987"
)

BBC = Brewery.create(
  brewery_name: "Boston Beer Company",
  brewery_type: "Region",
  origin: "Boston, MA, USA",
  brewery_description: "All the good beer!"
)

Okt = Drink.create(
  drink_name: "Samuel Adams OctoberFest",
  brewery_id: 1,
  style: "lager",
  ABV: 5.3,
  IBU: 16,
  description: "In 1810, the Oktoberfest tradition was born when Munich celebrated the Crown Prince’s wedding with a special beer and 16 day party."
)