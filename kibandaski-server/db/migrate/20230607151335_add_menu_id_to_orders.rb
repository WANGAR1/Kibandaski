class AddMenuIdToOrders < ActiveRecord::Migration[6.1]

  def change
    add_column :orders, :menu_id, :integer
  end
end
