require 'factory_girl'
include FactoryGirl::Syntax::Methods
FactoryGirl.define do
  factory :user do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name  }
    email { Faker::Internet.email }
    gender { User.genders.keys.sample }
  end
end
