const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// Get all users
router.get('/', userController.getAllUsers);

// Get user by ID
router.get('/:id', userController.getUserById);

// Add new user
router.post('/', userController.createUser);

// update user
router.put(':/id', userController.updateUser);

// Delete user
router.delete(':/id', userController.deleteUser);

module.exports = router;
