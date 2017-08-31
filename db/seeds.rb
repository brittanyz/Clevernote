# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
Note.destroy_all
User.destroy_all
Notebook.destroy_all

brittany = User.create!({username: "brittany", password: "brittany"})
note = Note.create!({title: "first note", body: "here is my note", notebook_id: brittany.default_notebook_id})
demoUser = User.create!({username: "demoUser", password: "demoUser"})
