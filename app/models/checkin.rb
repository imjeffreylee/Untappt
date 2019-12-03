class Checkin < ApplicationRecord
  validates :user_id, :drink_id, :rating, presence: true

  belongs_to :user

  belongs_to :drink
  
  has_one :brewery,
    through: :drink,
    source: :brewery
end
