class CreateBackyardBbqs < ActiveRecord::Migration[5.2]
  def change
    create_table :backyard_bbqs do |t|
      t.string :location
      t.integer :dad_id
      t.integer :bbq_id

      t.timestamps
    end
  end
end
