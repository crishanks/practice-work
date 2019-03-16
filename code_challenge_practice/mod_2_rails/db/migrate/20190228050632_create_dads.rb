class CreateDads < ActiveRecord::Migration[5.2]
  def change
    create_table :dads do |t|
      t.string :name
      t.string :joke

      t.timestamps
    end
  end
end
