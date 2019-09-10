class AdventuresController < ApplicationController

    def index
        @adventures = Adventure.all
        render json: @adventures
    end

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
