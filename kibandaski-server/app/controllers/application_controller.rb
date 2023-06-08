class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    #Add routes
    get '/owners' do
        owners = Owner.all 
        owners.to_json
    end

    get '/customers' do 
        customers = Customer.all
        customers.to_json
    end

    get '/menus' do 
        menus = Menu.all
        menus.to_json
    end
    
    get '/orders' do 
        orders = Order.all
        orders.to_json
    end

    get '/restaurants' do 
        restaurants = Restaurant.all
        restaurants.to_json
    end
end