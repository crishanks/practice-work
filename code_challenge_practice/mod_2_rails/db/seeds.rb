# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


dads = Dad.create(
    [
        {name: 'Greg', joke: 'Chicken crosses road'},
        {name: 'Terry', joke: 'Seafood eat it'},
        {name: 'Bill', joke: 'Sports analogies'}
    ]
)

bbqs = Bbq.create(
    [
        {brand: 'Traeger', quality: 10},
        {brand: 'Walmart', quality: 2},
        {brand: 'Firepit', quality: 5}
    ]
)

backyard_bbqs = BackyardBbq.create(
    [
        {location: 'Seatte', dad_id: 1, bbq_id: 1},
        {location: 'Salt Lake', dad_id: 2, bbq_id: 2},
        {location: 'Vegas', dad_id: 3, bbq_id: 3}
    ]
)