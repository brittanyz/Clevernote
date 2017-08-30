class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.string :tag_name, null: false
      t.integer :user_id, null: false 
      t.timestamps
    end
  end
end
