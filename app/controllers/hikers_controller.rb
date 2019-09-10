class HikersController < ApplicationController
    def index
        @hikers = Hiker.all
        render json: @hikers
    end
end
