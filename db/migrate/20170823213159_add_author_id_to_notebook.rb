class AddAuthorIdToNotebook < ActiveRecord::Migration[5.1]
  def change
    add_column :notebooks, :author_id, :integer
  end
end
