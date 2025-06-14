const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: [true, 'Username is required'] },
    firstname: { type: String, required: [true, 'First name is required'] },
    lastname: { type: String, required: [true, 'Last name is required'] },
    email: { type: String, required: [true, 'Email is required'] },
    password: { type: String, required: [true, 'Password is required'] },
  },
  { collection: 'users' }
);

module.exports = mongoose.model('User', userSchema);
