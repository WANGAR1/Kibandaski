class AddDinnerToMenus < ActiveRecord::Migration[6.1]
  def change
    add_column :menus, :dinner, :string
  end
end
