class Note < ApplicationRecord
  validates :title, :notebook_id, :body, presence: true
  validates :title, uniqueness: true

  belongs_to :notebook

  has_one :user,
    through: :notebook,
    source: :user
end
