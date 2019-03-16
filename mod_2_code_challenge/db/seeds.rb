# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

recipes = Recipe.create(
    [
        {title: 'Tomato Soup'},
        {title: 'Hamburger'},
        {title: 'Spaghetti'}
    ]
)

users = User.create (
    [
        {name: "George"},
        {name: "Dan"},
        {name: "Steve"}
    ]
)

# allergens = Allergen.create(
#     [
#         {type: 'rash', user_id: 1, ingredient_id: 1},
#         {type: 'swelling', user_id: 2, ingredient_id: 2},
#         {type: 'hair loss', user_id: 3, ingredient_id: 3}
#     ]
# )

ingredients = Ingredient.create(
    [
        {name: 'flour'},
        {name: 'salt'},
        {name: 'meat'},
        {name: 'tomato'},
        {name: 'lettuce'},
        {name: 'mustard'}
    ]
)
