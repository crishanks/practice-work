class BbqsController < ApplicationController
        
    before_action :find_bbq, only: [:show, :update, :edit]

    def index
      @bbqs = Bbq.all
    end

    def new
      @bbq = Bbq.new
    end

    def create
        @bbq = Bbq.new(bbq_params)
        if @bbq.save
            redirect_to bbq_path(@bbq)
        else
            render :new
        end
    end

    # def show
      
    # end

    # def edit
        
    # end

    def update
        if @bbq.update(bbq_params)
            redirect_to bbq_path(@bbq)
        else
            render :edit
        end
    end

    private

    def bbq_params
        params.require(:bbq).permit(
            :brand,
            :quality,
            dad_attributes: [
                :name,
                :joke
            ]
        )
    end

    def find_bbq
        @bbq = Bbq.find(params[:id])
    end

end
