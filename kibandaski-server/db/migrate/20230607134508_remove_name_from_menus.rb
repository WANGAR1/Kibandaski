class RemoveNameFromMenus < ActiveRecord::Migration[6.1]
  def change
    remove_column :menus, :name, :string
  end
end
