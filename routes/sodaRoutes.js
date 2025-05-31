const express = require('express');
const router = express.Router();
const sodaController = require('../controllers/sodaController');

// Soda recipe routes
// router.get('/', sodaController.getAllRecipes);
// router.get('/:id', sodaController.getRecipeById);
// router.post('/', sodaController.createRecipe);
// router.put('/:id', sodaController.updateRecipe);
// router.delete('/:id', sodaController.deleteRecipe);

// Soda recipe routes for swagger
// #region Swagger Tags
/**
 * @swagger
 * tags:
 *   name: Sodas
 *   description: Soda recipe management
 */
// #endregion

// GET all recipes
/**
 * @swagger
 * /sodas:
 *   get:
 *     tags: [Sodas]
 *     summary: Get all soda recipes
 *     responses:
 *       200:
 *         description: A list of soda recipes
 */
router.get('/', sodaController.getAllRecipes);

// GET by ID
/**
 * @swagger
 * /sodas/{id}:
 *   get:
 *     tags: [Sodas]
 *     summary: Get a soda recipe by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Soda recipe ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single soda recipe
 */
router.get('/:id', sodaController.getRecipeById);

// POST new recipe
/**
 * @swagger
 * /sodas:
 *   post:
 *     tags: [Sodas]
 *     summary: Create a new soda recipe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *              - recipeName
 *              - creatorId
 *              - sodaBase
 *             properties:
 *               recipeName:
 *                 type: string
 *               creatorId:
 *                 type: string
 *               sodaBase:
 *                 type: string
 *               syrups:
 *                 type: array
 *                 items:
 *                   type: string
 *               cream:
 *                 type: boolean
 *               purees:
 *                 type: array
 *                 items:
 *                   type: string
 *               otherIngredients:
 *                 type: array
 *                 items:
 *                   type: string
 *               flavorTag:
 *                 type: string
 *     responses:
 *       201:
 *         description: Soda recipe created
 */
router.post('/', sodaController.createRecipe);

// PUT update recipe
/**
 * @swagger
 * /sodas/{id}:
 *   put:
 *     tags: [Sodas]
 *     summary: Update a soda recipe
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               recipeName:
 *                 type: string
 *               creatorId:
 *                 type: string
 *               sodaBase:
 *                 type: string
 *               syrups:
 *                 type: array
 *                 items:
 *                   type: string
 *               cream:
 *                 type: boolean
 *               purees:
 *                 type: array
 *                 items:
 *                   type: string
 *               otherIngredients:
 *                 type: array
 *                 items:
 *                   type: string
 *               flavorTag:
 *                 type: string
 *     responses:
 *       200:
 *         description: Soda recipe updated
 */
router.put('/:id', sodaController.updateRecipe);

// DELETE recipe
/**
 * @swagger
 * /sodas/{id}:
 *   delete:
 *     tags: [Sodas]
 *     summary: Delete a soda recipe
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Soda recipe deleted
 */
router.delete('/:id', sodaController.deleteRecipe);

module.exports = router;
