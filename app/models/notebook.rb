class Notebook < ApplicationRecord
  validates :title, :author_id, presence: true
  validates :title, uniqueness: { scope: :author_id }

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :notes,
    foreign_key: :notebook_id
end
