class Note < ApplicationRecord
  validates :id, :title, :notebook_id, :body, presence: true
  # validates :title, uniqueness: true

  belongs_to :notebook,
    foreign_key: :notebook_id

  has_one :author,
    through: :notebook,
    source: :author
end
