    puts "Clearing stale data..."

    Owner.destroy_all
    Restaurant.destroy_all
    Menu.destroy_all
    Customer.destroy_all
    Order.destroy_all

    puts "🌱 Seeding owners..."

    owner1 = Owner.create(name: 'Mary Wanjiku')

    owner2 = Owner.create(name: 'Jack Msee')

    owner3 = Owner.create(name: 'Mama Ounde')

    owner4 = Owner.create(name: 'Jonte Were')

   puts "🌱 Seeding restaurants..."

    restaurant1 = Restaurant.create(
        owner: owner1,
        name: 'KwaWanjiku Hotel', 
        location: 'GuruNanak', 
        opening_time: Time.new(0, 1, 1, 8, 0, 0),
        closing_time: Time.new(0, 1, 1, 19, 0, 0)
    )

    restaurant2 = Restaurant.create(
        owner: owner2,
        name: 'ChomaBase Hotel', 
        location: 'Kyamichael', 
        opening_time: Time.new(0, 1, 1, 8, 0, 0),
        closing_time: Time.new(0, 1, 1, 19, 0, 0)
    )

    restaurant3 = Restaurant.create(
        owner: owner3,
        name: 'Ounde Hotel', 
        location: 'Githurai 45', 
        opening_time: Time.new(0, 1, 1, 8, 0, 0),
        closing_time: Time.new(0, 1, 1, 19, 0, 0)
    )

    restaurant4 = Restaurant.create(
        owner: owner4,
        name: 'KwaJonte Hotel', 
        location: 'Roysambu', 
        opening_time: Time.new(0, 1, 1, 8, 0, 0),
        closing_time: Time.new(0, 1, 1, 19, 0, 0)
    )


    puts "🌱 Seeding customers..."
    customer1 = Customer.create(name: 'Nick Muhwana')
    customer2 = Customer.create(name: 'Gradus Pondi')
    customer3 = Customer.create(name: 'Robert Muhaha')
    customer4 = Customer.create(name: 'Jane Doe')

    puts "🌱 Seeding menus..."
        Menu.create(
        breakfast: 'chai jiaba', 
        lunch:'ugali matumbo', 
        dinner:'kamande rice', 
        restaurant: restaurant1
        )

        Menu.create(
        breakfast: 'uji', 
        lunch:'milima', 
        dinner:'chapo ndengu', 
        restaurant: restaurant1
        )

        Menu.create(
        breakfast: 'coffee', 
        lunch:'ugali matura', 
        dinner:'kamande njahe', 
        restaurant: restaurant2
        )

        Menu.create(
        breakfast: 'uji boflo', 
        lunch:'omena', 
        dinner:'chapo beans', 
        restaurant: restaurant2
        )
    
puts "✅ Done seeding!"
