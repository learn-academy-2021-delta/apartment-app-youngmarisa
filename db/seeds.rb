apartments = [
    {
        street: '789 ABC Ave',
        city: 'San Diego',
        state: 'California',
        manager: 'John Doe',
        email: 'j_doe@test.com'
        price: '3200',
        bedrooms: 3,
        bathrooms: 2.5,
        pets: 'no pets allowed'

    },
    {
        street: '345 XYZ Lane',
        city: 'Philadelphia',
        state: 'Pennsylvania',
        manager: 'Danny Devito',
        email: 'devitodanny@test.com'
        price: '2750',
        bedrooms: 2,
        bathrooms: 1,
        pets: 'only kittens'

    }
]

first_user = User.first

apartments.each do |attribute|
    first_user.apartments.create.attribute
end