class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  after_create do
    notebook = Notebook.create!(title: "Default Notebook", author_id: self.id)
    self.default_notebook_id = notebook.id
    self.save!
  end

  after_create do
    first_note = Note.create!(title: "Welcome to Clevernote", body: "Welcome to Clevernote," +
      " your second brain! This is a place for you to capture, organize, and share you notes." +
      " our best ideas are always with you and in sync.", notebook_id: self.default_notebook_id)
    self.save!
  end

  has_many :notebooks,
    foreign_key: :author_id,
    class_name: :Notebook

  has_many :notes,
    through: :notebooks,
    source: :notes

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
