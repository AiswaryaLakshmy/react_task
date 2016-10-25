class ContactsController < ApplicationController
layout "admin"

	def index
		@presenter = {
			contacts: Contact.all
		}
	end

	def new
		@newcontact = {
			contact: Contact.new,
			form: {
	      action: contacts_path,
	      csrf_param: request_forgery_protection_token,
	      csrf_token: form_authenticity_token
	    } 
	  }
		if request.xhr?
      render json: Contact.new
    end
	end

	def create
		@contact = Contact.new(contact_params)
		@contact.save

		if request.xhr?
      render json: Contact.new(contact_params)
    else
      redirect_to contacts_path
    end
	end

	private

	def contact_params
		params.require(:contact).permit(:name, :phone)
	end
end
