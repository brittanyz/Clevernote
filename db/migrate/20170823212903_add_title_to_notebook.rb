class AddTitleToNotebook < ActiveRecord::Migration[5.1]
  def change
    add_column :notebooks, :title, :string
  end
end
