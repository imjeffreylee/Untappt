class Drink < ApplicationRecord
  validates :drink_name,
            :brewery_id,
            :style,
            :ABV,
            :IBU,
            :description,
            presence: true
  
  belongs_to :brewery
  has_many :checkins
end
