class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.integer :owner_id
      t.string :location
      t.datetime :opening_time
      t.datetime :closing_time
    end
  end
end
