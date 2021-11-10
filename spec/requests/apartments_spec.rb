require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let(:user) do
    User.create email: 'marisa@test.com', password: 'abcdef', password_confirmation: 'abcdef'
    
  end

  describe "GET /index" do
    it 'gets all of the apartments' do
      Apartment.create street: '21 Jump Street', city: 'Los Angeles', state: 'CA', manager: 'Johnny Depp', email: 'jdepp@test.com', price: '4000', bedrooms: 4, bathrooms: 2.5, pets: 'no', user_id: user.id

        get '/apartments'

        apartments = JSON.parse(response.body)
        expect(apartments.length).to eq 1
        expect(response).to have_http_status(200)

        apartment = apartments.first 
        expect(apartment['street']).to eq '21 Jump Street'
        expect(apartment['city']).to eq 'Los Angeles'
        expect(apartment['state']).to eq 'CA'
        expect(apartment['manager']).to eq 'Johnny Depp'
        expect(apartment['email']).to eq 'jdepp@test.com'
        expect(apartment['price']).to eq '4000'
        expect(apartment['bedrooms']).to eq 4
        expect(apartment['bathrooms']).to eq 2.5
        expect(apartment['pets']).to eq 'no'

    end
  end
end
