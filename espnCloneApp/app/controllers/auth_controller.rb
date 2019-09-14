class AuthController < ApplicationController
    skip_before_action :verify_authenticity_token


    def create
        @user = User.find_by(email: user_params[:email])
        byebug
        if @user && @user.authenticate(user_params[:password])
            token = JWT.encode({userId: @user.id}, ENV['SECRET'])
            render json: {firstName: @user.first_name, lastName: @user.last_name, token: token}, status: :accepted
        else
            render json: {errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end


    def user_params
        params.permit(:email, :password)
    end


end