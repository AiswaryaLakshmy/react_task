class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :find_current_user, except: :login

  def find_current_user
		@current_user = User.find_by(id: session[:current_user])
		redirect_to login_path unless @current_user
	end
end
