class Note < ApplicationRecord
  validates :title, :notebook_id, :body, presence: true
  # validates :title, uniqueness: true

  belongs_to :notebook,
    foreign_key: :notebook_id,
    class_name: :Notebook

  has_one :author,
    through: :notebook,
    source: :author
end
