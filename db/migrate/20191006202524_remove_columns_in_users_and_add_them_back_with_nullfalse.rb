class RemoveColumnsInUsersAndAddThemBackWithNullfalse < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :email
    remove_column :users, :email
    remove_column :users, :first_name
    remove_column :users, :last_name
    remove_column :users, :gender
    remove_column :users, :country
    remove_column :users, :birthday
    remove_column :users, :profile_photo

    add_column :users, :email, :string, null: false
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :gender, :string, null: false
    add_column :users, :country, :string, null: false
    add_column :users, :birthday, :string, null: false
  end
end
