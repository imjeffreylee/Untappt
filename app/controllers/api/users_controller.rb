class Api::UsersController < ApplicationController
  def index
    @users = User.all.includes(:checkins)
  end
  
  def show
    @user = User.includes(:checkins).find(params[:id])
    @checkins = @user.checkins
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :password,
      :email,
      :first_name,
      :last_name,
      :gender,
      :country,
      :birthday,
      :location
      )
  end
end
