const User = require('../models/userModel');
const { ObjectId } = require('mongodb');

// GET /users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// GET /users/:id
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.json(user);
  } catch (err) {
    return res.status(400).json({ message: 'Error retrieving user' });
  }
};

// POST /users
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(400).json({ message: 'Error creating user' });
  }
};

// PUT /users/:id
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Invalid user ID' });
  }

  try {
    const result = await User.findByIdAndUpdate(id, req.body, {
      new: false,
      runValidators: true,
    });

    if (!result) return res.status(404).json({ message: 'User not found' });

    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ message: 'Error updating user' });
  }
};

// DELETE /users/:id
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }
  try {
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting user' });
  }
};
