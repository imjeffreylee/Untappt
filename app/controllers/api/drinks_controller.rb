class Api::DrinksController < ApplicationController
  def create
    @drink = Drink.new(drink_params)
    if @drink.save
      render :show
    else
      render json: @drink.errors.full_messages, status: 422
    end
  end

  def destroy
    @drink = Drink.find(params[:id])
    if @drink
      @drink.destroy
    else
      render json: ["Couldn't find the drink you're looking for..."], status: 404
    end
  end

  def index
    @drinks = Drink.all
  end

  def update
    @drink = Drink.find(params[:id])
    if @drink.update_attribute(drink_params)
      render :show
    else
      render json: @drink.errors.full_messages, status: 422
    end
  end

  def show
    @drink = Drink.find(params[:id])
  end

  private

  def drink_params
    params.require(:drink).permit(
      :drink_name,
      :brewery_id,
      :style,
      :ABV,
      :IBU,
      :description
    )
  end
end
