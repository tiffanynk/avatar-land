class CreateBenders < ActiveRecord::Migration[6.0]
  def change
    create_table :benders do |t|
      t.string :name
      t.string :favorite_snack

      t.timestamps
    end
  end
end
