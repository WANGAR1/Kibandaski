class AddBreakfastToMenu < ActiveRecord::Migration[6.1]
  def change
    add_column :menus, :breakfast, :string
  end
end
