class Order < ActiveRecord::Base
    belongs_to :customer
    belongs_to :restaurant
    belongs_to :menu
end