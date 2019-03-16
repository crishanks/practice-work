class BackyardBbqsController < ApplicationController
    
    before_action :find_backyard_bbq, only: [:show, :edit, :update]
    
    def index
        @backyard_bbqs = BackyardBbq.all
    end

    def new
        @backyard_bbq = BackyardBbq.new
    end

    def show
      
    end

    def edit
      
    end

    def create
        @backyard_bbq = BackyardBbq.new(backyard_bbq_params)
        if @backyard_bbq.save 
            redirect_to @backyard_bbq
        else
            render :new
        end
    end

    def update
        if @backyard_bbq.update(backyard_bbq_params)
            redirect_to backyard_bbq_path(@backyard_bbq)
        else
            render :edit
        end
    end

    private 

    def backyard_bbq_params
        params.permit(:backyard_bbq).permit(
            :location,
            dad_attributes: [
                :name,
                :joke
            ],
            bbq_attributes: [
                :brand,
                :quality
            ]
        )
    end

    def find_backyard_bbq
        @backyard_bbq = BackyardBbq.find(params[:id])
    end
end
