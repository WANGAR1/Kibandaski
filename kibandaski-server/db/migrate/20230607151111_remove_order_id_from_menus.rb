class RemoveOrderIdFromMenus < ActiveRecord::Migration[6.1]
  def change
    remove_column :menus, :order_id, :string
  end
end
