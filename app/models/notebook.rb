class Notebook < ApplicationRecord
  validates :title, :author_id, presence: true
  validates :title, uniqueness: { scope: :author_id }

  belongs_to :user,
    foreign_key: :author_id

  has_many :notes
end
