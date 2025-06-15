const { body } = require('express-validator');

exports.userValidationRules = [
  body('username').notEmpty().withMessage('Username is required'),
  body('firstname').notEmpty().withMessage('First name is required'),
  body('lastname').notEmpty().withMessage('Last name is required'),
  body('email').notEmpty().withMessage('Email is required'),
  body('password').notEmpty().withMessage('password is required'),
];
