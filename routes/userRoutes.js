const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Validation
const { userValidationRules } = require('../middleware/userValidator');
const { validate } = require('../middleware/validate');

// prettier-ignore
// #swagger.tags = ['Sodas']
// #swagger.summary = 'Get a soda recipe by ID'
// #swagger.parameters['id'] = {
//     in: 'path',
//     description: 'Soda recipe ID',
//     required: true,
//     type: 'string'
// }
router.get('/:id', userController.getUserById);

// prettier-ignore
// #swagger.tags = ['Users']
// #swagger.summary = 'Get all users'
router.get('/', userController.getAllUsers);

// Add new user
router.post('/', userController.createUser);

// update user
router.put('/:id', userController.updateUser);

// Delete user
router.delete('/:id', userController.deleteUser);

module.exports = router;
