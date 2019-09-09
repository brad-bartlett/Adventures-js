class Hiker < ApplicationRecord

    has_many :adventures
    has_many :parks, through: :adventures
    
end
