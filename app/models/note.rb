# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  body        :text             not null
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
  validates :title, :notebook_id, :body, presence: true
  # validates :title, uniqueness: true

  belongs_to :notebook,
    foreign_key: :notebook_id,
    class_name: :Notebook

  has_one :author,
    through: :notebook,
    source: :author

  has_many :taggings, dependent: :destroy

  has_many :tags,
  through: :taggings,
  source: :tag

end
