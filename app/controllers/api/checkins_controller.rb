class Api::CheckinsController < ApplicationController
  def create
    @checkin = Checkin.new(checkin_params)
    if @checkin.save
      render :index
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def show
    @checkin = Checkin.find(params[:id])
    @drinks = Drink.all
    @breweries = Brewery.all
  end

  def destroy
    @checkin = Checkin.find(params[:id])
    if @checkin
      @checkin.destroy
    else
      render json: @checkin.errors.full_messages, status: 404
    end
  end

  def update
    @checkin = Checkin.find(params[:id])
    if @checkin.update_attribute(checkin_params)
      render :index
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def index
    @checkins = Checkin.all
  end

  private

  def checkin_params
    params.require(:checkin).permit(:rating, :review)
  end
end
