class UsersController < ApplicationController
	skip_before_action :find_current_user, only: [:new, :create]
	before_action :get_user, only: [ :edit, :update ]

	def new
		redirect_to dashboards_path and return if session[:current_user]
		@user = {
			user: User.new,
			form: {
	      action: users_path,
	      csrf_param: request_forgery_protection_token,
	      csrf_token: form_authenticity_token
	    } 
	  }
	end

	def edit
		
	end

	def create
		@user = User.new(user_params)
		password = Digest::SHA1.hexdigest(user_params[:password])
		@user.encrypted_password = password
		if user_params[:password] == user_params[:confirm_password]
			if @user.save
				session[:current_user] = @user.id
      	if request.xhr?
      		flash[:success] = 'You signed up succefully!'
					render json: @home
				else
					redirect_to dashboards_path
				end
    	else
      	flash[:error] = 'Form is invalid.'
      	render 'new'
    	end
    else
    	flash[:error] = 'Password and confirm password doesnt match'
    	render 'new'
    end
	end

	def login
		redirect_to dashboards_path and return if session[:current_user]
		if request.post?
			password = Digest::SHA1.hexdigest(user_params[:password])
			@user = User.find_by(username: user_params[:username])
			@login = {
				user: User.find_by(username: user_params[:username]),
				password: Digest::SHA1.hexdigest(user_params[:password]),
				form: {
		      action: dashboards_path,
		      csrf_param: request_forgery_protection_token,
		      csrf_token: form_authenticity_token
	    	} 
			}
			if user.try(:encrypted_password) == password
				#username and password matched
				session[:current_user] = @user.id
				if request.xhr?
					render json: @dashboard
				else
					redirect_to users_path
				end

			else
				#password is wrong
				flash[:error] = 'Invalid username or password'
				redirect_to :back
			end
		end
	end

	def logout
		logout_current_user
		flash[:success] = 'Logged out successfully'
		redirect_to login_path
	end

	private
	def user_params
		params.require(:user).permit( :username, :password, :confirm_password )
	end

	def logout_current_user
		session[:current_user] = nil
	end

	def get_user
		@user = User.find(params[:id])
	end
end
