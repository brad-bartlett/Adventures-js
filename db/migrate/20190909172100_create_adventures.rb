class CreateAdventures < ActiveRecord::Migration[5.2]
  def change
    create_table :adventures do |t|
      t.references :hiker, index: true
      t.references :park, index: true
      t.timestamps
    end
  end
end
