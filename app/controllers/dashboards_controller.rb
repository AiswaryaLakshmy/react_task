class DashboardsController < ApplicationController
layout "admin", only: [:index]

	def index
		@home = {
			dashboard: Dashboard.all
		}
	end

	def new
		@about = {
			dashboard: Dashboard.new
		}
	end

	def create
		@dashboard = Dashboard.new(dashboard_params)
		@dashboard.save

		if request.xhr?
			render json: @dashboard
		else
			redirect_to dashboards_path
		end
	end

	private

	def dashboard_params
		params.require(:dashboard).permit(:description)
	end
end
