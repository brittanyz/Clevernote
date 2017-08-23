class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :notebook_id, null: false
      t.timestamps
    end
    add_index :notes, :title
  end
end
