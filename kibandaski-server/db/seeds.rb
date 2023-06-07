puts "Clearing stale data..."

ActiveRecord::Base.transaction do
  Owner.destroy_all
  Restaurant.destroy_all
  Menu.destroy_all
  Customer.destroy_all
  Order.destroy_all

  puts "🌱 Seeding owners..."

  owner1 = Owner.create!(name: 'Mary Wanjiku')
  owner2 = Owner.create!(name: 'Jack Msee')
  owner3 = Owner.create!(name: 'Mama Ounde')
  owner4 = Owner.create!(name: 'Jonte Were')

  puts "🌱 Seeding restaurants..."

  restaurant1 = owner1.restaurants.create!(
    name: 'Kwa-Wanjiku Hotel',
    location: 'Guru-Nanak',
    opening_time: Time.zone.parse('8:00 AM'),
    closing_time: Time.zone.parse('7:00 PM')
  )

  restaurant2 = owner2.restaurants.create!(
    name: 'ChomaBase Hotel',
    location: 'Kyamichael',
    opening_time: Time.zone.parse('8:00 AM'),
    closing_time: Time.zone.parse('7:00 PM')
  )

  restaurant3 = owner3.restaurants.create!(
    name: 'Ounde Hotel',
    location: 'Githurai 45',
    opening_time: Time.zone.parse('8:00 AM'),
    closing_time: Time.zone.parse('7:00 PM')
  )

  restaurant4 = owner4.restaurants.create!(
    name: 'KwaJonte Hotel',
    location: 'Roysambu',
    opening_time: Time.zone.parse('8:00 AM'),
    closing_time: Time.zone.parse('7:00 PM')
  )

  puts "🌱 Seeding customers..."
  customer1 = Customer.create!(name: 'Nick Muhwana')
  customer2 = Customer.create!(name: 'Gradus Pondi')
  customer3 = Customer.create!(name: 'Robert Muhaha')
  customer4 = Customer.create!(name: 'Jane Doe')

  puts "🌱 Seeding menus..."
  menu1 = restaurant1.menus.create!(
    breakfast: 'chai jiaba',
    lunch: 'ugali matumbo',
    dinner: 'kamande rice'
  )

  menu2 = restaurant1.menus.create!(
    breakfast: 'uji',
    lunch: 'milima',
    dinner: 'chapo ndengu'
  )

  menu3 = restaurant2.menus.create!(
    breakfast: 'coffee',
    lunch: 'ugali matura',
    dinner: 'kamande njahe'
  )

  menu4 = restaurant2.menus.create!(
    breakfast: 'uji boflo',
    lunch: 'omena',
    dinner: 'chapo beans'
  )

  puts "🌱 Seeding orders..."

  Order.create!(name: 'order 1', menu: menu1, customer: customer1, restaurant: restaurant1)
  Order.create!(name: 'order 2', menu: menu2, customer: customer2, restaurant: restaurant2)
  Order.create!(name: 'order 3', menu: menu3, customer: customer3, restaurant: restaurant3)
  Order.create!(name: 'order 4', menu: menu4, customer: customer4, restaurant: restaurant4)

  puts "✅ Done seeding!"
end
