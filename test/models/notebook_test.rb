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

require 'test_helper'

class NotebookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
