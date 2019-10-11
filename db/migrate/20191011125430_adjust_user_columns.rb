class AdjustUserColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :email
    remove_column :users, :first_name
    remove_column :users, :last_name
    remove_column :users, :gender
    remove_column :users, :country
    remove_column :users, :birthday

    add_column :users, :email, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :gender, :string
    add_column :users, :country, :string
    add_column :users, :birthday, :string
  end
end
