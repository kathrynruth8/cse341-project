const { body } = require('express-validator');

exports.sodaValidationRules = [
  body('recipeName').notEmpty().withMessage('recipeName is required'),
  body('creatorId').notEmpty().withMessage('creatorId is required'),
  body('sodaBase').notEmpty().withMessage('sodaBase is required'),
  body('syrups').optional().isArray().withMessage('syrups must be an array'),
  body('cream')
    .optional()
    .isBoolean()
    .withMessage('cream must be true or false'),
  body('purees').optional().isArray().withMessage('purees must be an array'),
  body('otherIngredients')
    .optional()
    .isArray()
    .withMessage('otherIngredients must be an array'),
  body('flavorTag')
    .optional()
    .isString()
    .withMessage('flavorTag must be a string'),
];
