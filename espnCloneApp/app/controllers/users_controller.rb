class UsersController < ApplicationController
    def index
        render component: 'Users'
        # render component: 'Users', props: { users: @users }
    end


end
