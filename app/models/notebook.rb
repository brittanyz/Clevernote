# == Schema Information
#
# Table name: notebooks
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string
#  author_id  :integer
#

class Notebook < ApplicationRecord
  validates :title, :author_id, presence: true
  validates :title, uniqueness: { scope: :author_id }

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :notes,
    foreign_key: :notebook_id

    # after_create do
    #   first_note = Note.create!(title: 'Title...', body:
    #                     "Add your note here...", notebook_id: self.id)
    #   self.save!
    # end
end
