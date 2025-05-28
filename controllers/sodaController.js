const Recipe = require('../models/sodaModel');

// GET /recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// GET /recipes/:id
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe)
      return res.status(404).json({ message: 'Soda recipe not found' });
    res.json(recipe);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID' });
  }
};

// POST /recipes
exports.createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: 'Error creating soda recipe' });
  }
};

// PUT /recipes/:id
exports.updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedRecipe)
      return res.status(404).json({ message: 'Soda recipe not found' });
    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ message: 'Error updating soda recipe' });
  }
};

// DELETE /recipes/:id
exports.deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe)
      return res.status(404).json({ message: 'Soda recipe not found' });
    res.json({ message: 'Soda recipe deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID' });
  }
};
