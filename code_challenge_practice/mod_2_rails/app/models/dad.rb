class Dad < ApplicationRecord
    #relationships
    has_many :backyard_bbqs
    has_many :bbqs, through: :backyard_bbqs

    #validations
    validates :name, presence: true
    validates :joke, uniqueness: true
end
