class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    #Add routes
    #Get all owners
    get '/owners' do
        owners = Owner.all 
        owners.to_json
    end

    #find menu by resturant
    get '/menus/:id' do 
        menus = Menu.find(params[:id])
        menus.to_json
    end

    #edit menu 
    patch '/menus/:id' do 
        menus = Menu.find(params[:id])
        menus.update(breakfast: params[:breakfast])
        menus.update(lunch: params[:lunch])
        menus.update(dinner: params[:dinner])
        menus.to_json
    end
    
    #menu edit by restaurant owner


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