class User < ApplicationRecord
  has_secure_password
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, uniqueness: true
  validates :password, :length => {:within => 6..18}
end
