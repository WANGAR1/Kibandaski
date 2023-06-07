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
    name: 'KwaWanjiku Hotel', 
    location: 'GuruNanak', 
    opening_time: Time.new(0, 1, 1, 8, 0, 0),
    closing_time: Time.new(0, 1, 1, 19, 0, 0)
    )

    restaurant2 = Restaurant.create(
    name: 'ChomaBase Hotel', 
    location: 'Kyamichael', 
    opening_time: Time.new(0, 1, 1, 8, 0, 0),
    closing_time: Time.new(0, 1, 1, 19, 0, 0)
    )

    restaurant3 = Restaurant.create(
    name: 'Ounde Hotel', 
    location: 'Githurai 45', 
    opening_time: Time.new(0, 1, 1, 8, 0, 0),
    closing_time: Time.new(0, 1, 1, 19, 0, 0)
    )

    restaurant4 = Restaurant.create(
    name: 'KwaJonte Hotel', 
    location: 'Roysambu', 
    opening_time: Time.new(0, 1, 1, 8, 0, 0),
    closing_time: Time.new(0, 1, 1, 19, 0, 0)
    )


puts "✅ Done seeding!"
