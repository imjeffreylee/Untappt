class Api::BreweriesController < ApplicationController
  def index
    @breweries = Brewery.all
  end

  def show
    @brewery = Brewery.find(params[:id])
  end

  def create
    @brewery = Brewery.new(brewery_params)
    if @brewery.save
      render :show
    else
      render json: @brewery.errors.full_messages, status: 422
    end
  end

  def update
    @brewery = Brewery.find(params[:id])
    if @brewery.update_attribute(brewery_params)
      render :show
    else
      render json: @brewery.errors.full_messages, status: 422
    end
  end

  private

  def brewery_params
    params.require(:brewery).permit(
      :brewery_name,
      :brewery_type,
      :origin,
      :brewery_description
    )
  end
end
