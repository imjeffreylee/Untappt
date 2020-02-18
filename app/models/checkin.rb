class Checkin < ApplicationRecord
  validates :rating, presence: true

  belongs_to :user

  belongs_to :drink
  
  has_one :brewery,
    through: :drink,
    source: :brewery

  has_one_attached :photo
end
