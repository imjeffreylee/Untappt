class Brewery < ApplicationRecord
  validates :brewery_name,
            :brewery_type,
            :origin,
            :brewery_description,
            presence: true

  has_many :drinks
end
