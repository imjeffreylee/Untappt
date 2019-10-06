class CreateDrinks < ActiveRecord::Migration[5.2]
  def change
    create_table :drinks do |t|
      t.string :drink_name, null: false
      t.integer :brewery_id, null: false
      t.string :style, null: false
      t.float :ABV, null: false
      t.integer :IBU, null: false
      t.text :description, null: false

      t.timestamps
    end
    add_index :drinks, :brewery_id
    add_index :drinks, :drink_name, unique: true
  end
end
