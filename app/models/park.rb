class Park < ApplicationRecord

    has_many :adventures
    has_many :hikers, through :adventures
    
end
