class AddNotebookIdtoUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :default_notebook_id, :integer
  end
end
