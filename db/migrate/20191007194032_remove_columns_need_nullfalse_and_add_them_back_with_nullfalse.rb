class RemoveColumnsNeedNullfalseAndAddThemBackWithNullfalse < ActiveRecord::Migration[5.2]
  def change
    remove_column :checkins, :user_id
    remove_column :checkins, :drink_id
    remove_column :checkins, :rating

    add_column :checkins, :user_id, :integer, null: false
    add_column :checkins, :drink_id, :integer, null: false
    add_column :checkins, :rating, :float, null: false
  end
end
