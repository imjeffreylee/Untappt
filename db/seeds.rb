# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Brewery.destroy_all
Drink.destroy_all
Checkin.destroy_all

#### Users seeds

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

guest2 = User.create(
  username: "guest2",
  password: "password2",
  location: "NY, USA",
  email: "drinkmore2@untappt.com",
  first_name: "Guest2",
  last_name: "User2",
  gender: "Prefer not to say",
  country: "USA",
  birthday: "02/02/1987"
)

#### Users seeds end

####

#### Breweries seeds

brew1 = Brewery.create(
  brewery_name: "Boston Beer Company",
  brewery_type: "Regional Brewery",
  origin: "Boston, MA United States",
  brewery_description: "Jim Koch founded the Boston Beer Company back in 1984 after brewing the first batch of Samuel Adams Boston Lager in his kitchen."
)

brew2 = Brewery.create(
  brewery_name: "Stella Artois",
  brewery_type: "Macro Brewery",
  origin: "Leuven, Vlaanderen Belgium",
  brewery_description: "Stella Artois was first brewed as a Christmas beer in Leuven."
)

brew3 = Brewery.create(
  brewery_name: "Harpoon Brewery",
  brewery_type: "Regional Brewery",
  origin: "Boston, MA United States",
  brewery_description: "Love Beer. Love Life. Employee-Owned, brewed in Boston, MA and Windsor, VT."
)

brew4 = Brewery.create(
  brewery_name: "Kronenbourg Brewery",
  brewery_type: "Macro Brewery",
  origin: "Strasbourg, Grand-Est France",
  brewery_description: "Kronenbourg 1664 is the most sold French beer in the world and the market leader for high-end premium beers."
)

brew5 = Brewery.create(
  brewery_name: "Kirin Brewery Company",
  brewery_type: "Macro Brewery",
  origin: "Nakano-ku, Tokyo Japan",
  brewery_description: "Japanese brewery."
)

brew6 = Brewery.create(
  brewery_name: "Taiwan Tobacco & Liquor Corporation",
  brewery_type: "Macro Brewery",
  origin: "Taiwan",
  brewery_description: "Taiwanese brewery."
)

#### Breweries seeds end

####

#### Drinks seeds

drink1 = Drink.create(
  drink_name: "Samuel Adams OctoberFest",
  brewery_id: brew1.id,
  style: "Märzen",
  ABV: 5.3,
  IBU: 16,
  description: "In 1810, the Oktoberfest tradition was born when Munich celebrated the Crown Prince’s wedding with a special beer and 16 day party."
)

drink2 = Drink.create(
  drink_name: "Stella Artois",
  brewery_id: brew2.id,
  style: "Lager - Euro Pale",
  ABV: 5,
  IBU: 24,
  description: "Stella Artois was first brewed as a Christmas beer in Leuven."
)

drink3 = Drink.create(
  drink_name: "Harpoon IPA",
  brewery_id: brew3.id,
  style: "IPA - American",
  ABV: 5.9,
  IBU: 42,
  description: "We started brewing this beer as a summer seasonal in 1993."
)

drink4 = Drink.create(
  drink_name: "1664",
  brewery_id: brew4.id,
  style: "Lager - Euro Pale",
  ABV: 5.5,
  IBU: 20,
  description: "Kronenbourg 1664 is France’s No.1 selling beer and the UK’s second-biggest selling premium lager."
)

drink5 = Drink.create(
  drink_name: "Ichiban (Ichiban Shibori) (一番搾り)",
  brewery_id: brew5.id,
  style: "Lager - Pale",
  ABV: 5,
  IBU: 18,
  description: "Kirin Ichiban Shibori is the name in the Japanese Market, whilst Kirin Ichiban is the name for export."
)

drink6 = Drink.create(
  drink_name: "Gold Medal Taiwan Beer",
  brewery_id: brew6.id,
  style: "Lager - Japanese Rice",
  ABV: 5,
  IBU: 0,
  description: "Most popular beer in Taiwan."
)

#### Drinks seeds end

####

#### Checkins seeds

checkin1 = Checkin.create(
  user_id: guest.id,
  drink_id: drink1.id,
  rating: 5,
  review: "This is so good!"
)
  
checkin2 = Checkin.create(
  user_id: guest.id,
  drink_id: drink2.id,
  rating: 5,
  review: "I can drink this all day!"
)
    
checkin3 = Checkin.create(
  user_id: guest.id,
  drink_id: drink3.id,
  rating: 3,
  review: "It was okay."
)
      
checkin4 = Checkin.create(
  user_id: guest.id,
  drink_id: drink4.id,
  rating: 1,
  review: "I'm not sure I'm drinking water or beer."
)

checkin5 = Checkin.create(
  user_id: guest2.id,
  drink_id: drink5.id,
  rating: 3,
  review: "It was not okay."
)

checkin6 = Checkin.create(
  user_id: guest2.id,
  drink_id: drink6.id,
  rating: 2,
  review: "I drink it only when there are no other choices."
)

checkin7 = Checkin.create(
  user_id: guest.id,
  drink_id: drink6.id,
  rating: 5,
  review: "This was just created."
)

#### Checkins seeds end