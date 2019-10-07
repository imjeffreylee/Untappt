class CreateCheckins < ActiveRecord::Migration[5.2]
  def change
    create_table :checkins do |t|
      t.integer :user_id
      t.integer :drink_id
      t.float :rating
      t.text :review

      t.timestamps
    end
    add_index :checkins, :user_id
    add_index :checkins, :drink_id
  end
end
