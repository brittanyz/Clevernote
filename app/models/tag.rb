# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  tag_name   :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :tag_name, :user_id, presence: true
  validates :tag_name, uniqueness: true

  has_many :taggings,
    foreign_key: :tag_id

  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User

  has_many :notes,
    through: :taggings,
    source: :note
end
