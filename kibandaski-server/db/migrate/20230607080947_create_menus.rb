class CreateMenus < ActiveRecord::Migration[6.1]
  def change
    create_table :menus do |t|
      t.integer :restaurant_id
      t.string :name
    end
  end
end
