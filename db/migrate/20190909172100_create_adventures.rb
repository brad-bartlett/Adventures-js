class CreateAdventures < ActiveRecord::Migration[5.2]
  def change
    create_table :adventures do |t|
      t.date :date
      t.blob :snippet
      t.integer :rating
      t.references :hiker, index: true
      t.references :park, index: true
      t.timestamps
    end
  end
end
