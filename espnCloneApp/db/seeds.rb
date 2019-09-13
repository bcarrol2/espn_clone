# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cory = User.create(first_name: 'Cory', last_name: 'Adams', email: 'coadams9@gmail.com', password: 'cookies')
blair = User.create(first_name: 'Blair', last_name: 'Carroll', email: 'blairacarroll@gmail.com', password: 'cookies')