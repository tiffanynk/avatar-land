class BendersController < ApplicationController
    def index
        @benders = Bender.all

        render json: @benders
    end

    def show
        @bender = Bender.find(params[:id])

        render json: @bender
    end

    def create
        @bender = Bender.create(name: params[:name], favorite_snack: params[:favorite_snack])

        redirect_to 'http://localhost:3001'
    end
end
