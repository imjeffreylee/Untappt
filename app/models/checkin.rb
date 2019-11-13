class Checkin < ApplicationRecord
  validates :user_id, :drink_id, :rating, presence: true
  validates :rating, inclusion: { 0..5 }

  
  belongs_to :user
  belongs_to :drink
end
