puts "Clearing stale data..."

Owner.destroy_all
Restaurant.destroy_all
Menu.destroy_all
Customer.destroy_all
Order.destroy_all

puts "🌱 Seeding owners..."

owner1 = Owner.create(
    name: 'Hamilton Lewis'
)

owner2 = Owner.create(
    name: 'Lando Noris'
)

owner3 = Owner.create(
    name: 'Maxwel Verstappen'
)

owner4 = Owner.create(
    name: 'Guenther Steiner'
)
puts "✅ Done seeding!"
