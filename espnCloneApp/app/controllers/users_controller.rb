class UsersController < ApplicationController
    def index
        render component: 'Users'
    end


end
