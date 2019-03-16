class CreateBbqs < ActiveRecord::Migration[5.2]
  def change
    create_table :bbqs do |t|
      t.string :brand
      t.integer :quality

      t.timestamps
    end
  end
end
