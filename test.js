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
 *             recipeName: "Razzle Dazzle Berry"
 *             creatorId: "user123"
 *             sodaBase: "Dr. Pepper"
 *             syrups: ["raspberry", "strawberry"]
 *             cream: true
 *             purees: []
 *             otherIngredients: []
 *             flavorTag: "fruity"
 *     responses:
 *       201:
 *         description: Soda recipe created
 */
router.post('/', sodaValidationRules, validate, sodaController.createRecipe);

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
 *         description: Soda recipe ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             recipeName: "Updated Recipe Name"
 *             creatorId: "user123"
 *             sodaBase: "Club Soda"
 *             syrups: ["Vanilla"]
 *             cream: true
 *             purees: ["Mango"]
 *             otherIngredients: ["Lime"]
 *             flavorTag: "Fruity"
 *     responses:
 *       204:
 *         description: Soda recipe updated
 */
router.put('/:id', sodaValidationRules, validate, sodaController.updateRecipe);
