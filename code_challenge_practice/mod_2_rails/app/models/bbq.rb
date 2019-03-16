class Bbq < ApplicationRecord
    #relationships
    has_many :backyard_bbqs
    has_many :dads, through: :backyard_bbqs

    #validations
    validates :brand, presence: true
    validates :quality, presence: true

    accepts_nested_attributes_for :backyard_bbqs
end
