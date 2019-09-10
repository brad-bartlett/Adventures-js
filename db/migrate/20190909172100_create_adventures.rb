class CreateAdventures < ActiveRecord::Migration[5.2]
  def change
    create_table :adventures do |t|
      t.string :comment
      t.references :hiker, index: true
      t.references :park, index: true
      t.timestamps
    end
  end
end
