apartments = [
    {
        street: '789 ABC Ave',
        city: 'San Diego',
        state: 'CA',
        manager: 'John Doe',
        email: 'j_doe@test.com',
        price: '3200',
        bedrooms: 3,
        bathrooms: 2.5,
        pets: 'no pets allowed'

    },
    {
        street: '345 XYZ Lane',
        city: 'Philadelphia',
        state: 'PA',
        manager: 'Danny Devito',
        email: 'devitodanny@test.com',
        price: '2750',
        bedrooms: 2,
        bathrooms: 1,
        pets: 'only kittens'

    },
    {
        street: '124 Conch Street',
        city: 'Honolulu',
        state: 'HI',
        manager: 'Sandy Cheeks',
        email: 'sandycheeks@test.com',
        price: '1900',
        bedrooms: 1,
        bathrooms: 1,
        pets: 'any pets allowed'

    }
]

first_user = User.first

apartments.each do |attribute|
    first_user.apartments.create attribute
end