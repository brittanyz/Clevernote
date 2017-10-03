# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  tag_id     :integer          not null
#  note_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
  validates :note_id, :tag_id, presence: true
  validates :tag_id, uniqueness: { scope: :note_id }

  belongs_to :note,
  foreign_key: :note_id

  belongs_to :tag,
  dependent: :destroy,
  foreign_key: :tag_id

  has_one :author,
  through: :note,
  source: :author
end
