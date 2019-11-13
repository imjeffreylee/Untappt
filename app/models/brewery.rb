class Brewery < ApplicationRecord
  validates :brewery_name,
            :brewery_type,
            :origin,
            :brewery_description,
            presence: true

  has_many :drinks
  
  has_many :checkins,
    through: :drinks,
    source: :checkins
    
end
