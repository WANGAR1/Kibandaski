class AddLunchToMenus < ActiveRecord::Migration[6.1]
  def change
    add_column :menus, :lunch, :string
  end
end
