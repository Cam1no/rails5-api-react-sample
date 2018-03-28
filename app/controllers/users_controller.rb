class UsersController < ApplicationController
  def index
    users = User.all
    render json: users.to_json
  end

  def destroy
    user = User.find(params[:id])
    render json: :ok if user.destroy
  end

  def create
    user = User.new(
      first_name: params[:first_name],
      last_name: params[:last_name],
      email: params[:email],
      gender: params[:gender]
    )
    return render json: user if user.save
  end
end
