# class HikersController < ApplicationController
#     def index
#         @hikers = Hiker.all
#         render json: @hikers
#     end

#     def create   
#         @hiker = Hiker.new(hiker_params)
#     end

#     private

#     def hiker_params   
#         params.require(:hiker).permit(:name)   
#       end   
# end

