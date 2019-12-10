class AdventuresController < ApplicationController

    def index
        @adventures = Adventure.all
        render json: @adventures
    end

    def create
        @adventure = Adventure.create(date: params["date"], snippet: params["snippet"],rating: params["rating"], park_id: params["park_id"])
        render json: @adventure
    end


    def show
        @adventure = Adventure.find(params[:id])
        render json: @adventure
    end

    def update   
        @adventure = Adventure.find(params[:id])   
        render json: @adventure
    end   

    def destroy   
        @adventure = Adventure.find(params[:id])
        @adventure.destroy!
        render json: @adventure
    end

# private

#     def adventure_params   
#         params.require(:adventure).permit(:snippet, :rating, :hiker_id, :park_id)   
#     end   

end
