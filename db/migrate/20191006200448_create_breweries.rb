class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.string :brewery_name, null: false
      t.string :brewery_type, null: false
      t.string :origin, null: false
      t.text :brewery_description, null: false

      t.timestamps
    end
    add_index :breweries, :brewery_name, unique: true
  end
end
