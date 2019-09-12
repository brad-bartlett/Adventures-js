class AdventuresController < ApplicationController

    def index
        @adventures = Adventure.all
        render json: @adventures
    end

    def create
        p params
        @adventure = Adventure.create!(date:params["date"], snippet:params["snippet"],rating:params["rating"], park_id:1, hiker_id:2)
        # @adventure.save
        render json: @adventure
    end

    # t.date "date"
    # t.string "snippet"
    # t.integer "rating"


    def show
        @adventure = adventure.find(params[:id])
        render json: @adventure
    end

    def edit   
        @adventure = Adventure.find(params[:id])   
        render json: @adventure
    end   

    def destroy   
        @adventure = Adventure.find(params[:id])
        render json: @adventure
    end

private

    def adventure_params   
        params.require(:adventure).permit(:snippet, :rating, :hiker_id, :park_id)   
    end   

end
