class DadsController < ApplicationController
    
    before_action :find_dad, only: [:show, :update, :edit]

    def index
      @dads = Dad.all
    end

    def new
      @dad = Dad.new
    end

    def create
        @dad = Dad.new(dad_params)
        if @dad.save
            redirect_to dad_path(@dad)
        else
            render :new
        end
    end

    # def show
      
    # end

    # def edit
        
    # end

    def update
        if @dad.update(dad_params)
            redirect_to dad_path(@dad)
        else
            render :edit
        end
    end

    private

    def dad_params
        params.require(:dad).permit(:name, :joke)
    end

    def find_dad
        @dad = Dad.find(params[:id])
    end

end
