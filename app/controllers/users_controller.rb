class UsersController < ApplicationController
  def index
    users = User.all
    render json: users.to_json
  end

  def destroy
    user = User.find(params[:id])
    render json: :ok if user.destroy
  end
end
