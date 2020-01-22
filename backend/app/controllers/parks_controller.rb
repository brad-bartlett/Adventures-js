class ParksController < ApplicationController

    def index
        @parks = Park.all
        render json: @parks, status: 200
    end
    
    def show
        @park = Park.find(params[:id])
        render json: @park, status: 200
    end

    
end
