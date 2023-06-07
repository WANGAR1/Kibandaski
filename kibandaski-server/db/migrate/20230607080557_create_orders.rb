class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :name
      t.integer :customer_id
      t.integer :menu_id
    end
  end
end
