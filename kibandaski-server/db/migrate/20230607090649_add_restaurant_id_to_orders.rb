class AddRestaurantIdToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :restaurant_id, :integer
  end
end
