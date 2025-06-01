const express = require('express');

const router = express.Router();
const sodaController = require('../controllers/sodaController');

// Validation
const { sodaValidationRules } = require('../middleware/sodaValidator');
const { validate } = require('../middleware/validate');

// prettier-ignore
// GET all soda recipes
// #swagger.tags = ['Sodas']
// #swagger.summary = 'Get all soda recipes'
router.get('/',sodaController.getAllRecipes
);

// prettier-ignore
// GET soda recipe by ID
// #swagger.tags = ['Sodas']
// #swagger.summary = 'Get a soda recipe by ID'
// #swagger.parameters['id'] = {
//     in: 'path',
//     description: 'Soda recipe ID',
//     required: true,
//     type: 'string'
// }
router.get('/:id',sodaController.getRecipeById
);

// prettier-ignore
// POST new soda recipe
// #swagger.tags = ['Sodas']
// #swagger.summary = 'Create a new soda recipe'
// #swagger.requestBody = {
//   required: true,
//   content: {
//     "application/json": {
//       schema: {
//         recipeName: "Razzle Dazzle Berry",
//         creatorId: "user123",
//         sodaBase: "Dr. Pepper",
//         syrups: ["raspberry", "strawberry"],
//         cream: true,
//         purees: [],
//         otherIngredients: [],
//         flavorTag: "fruity"
//       }
//     }
//   }
// }
router.post('/',sodaValidationRules, validate, sodaController.createRecipe);

// prettier-ignore
// PUT update soda recipe
// #swagger.tags = ['Sodas']
// #swagger.summary = 'Update a soda recipe'
// #swagger.parameters['id'] = {
//     in: 'path',
//     description: 'Soda recipe ID',
//     required: true,
//     type: 'string'
// }
// #swagger.requestBody = {
//   required: true,
//   content: {
//     "application/json": {
//       schema: {
//         recipeName: "Razzle Dazzle Berry",
//         creatorId: "user123",
//         sodaBase: "Dr. Pepper",
//         syrups: ["raspberry", "strawberry"],
//         cream: true,
//         purees: [],
//         otherIngredients: [],
//         flavorTag: "fruity"
//       }
//     }
//   }
// }
router.put('/:id',sodaValidationRules, validate, sodaController.updateRecipe);

// prettier-ignore
// DELETE soda recipe

// #swagger.tags = ['Sodas']
// #swagger.summary = 'Delete a soda recipe'
// #swagger.parameters['id'] = {
//     in: 'path',
//     description: 'Soda recipe ID',
//     required: true,
//     type: 'string'
// }
router.delete('/:id',sodaController.deleteRecipe);

module.exports = router;
