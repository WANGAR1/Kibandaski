class RemoveMenuIdFromCustomers < ActiveRecord::Migration[6.1]
  def change
    remove_column :customers, :menu_id, :integer
  end
end
