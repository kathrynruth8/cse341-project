const Recipe = require('../models/sodaModel');
const { ObjectId } = require('mongodb');

// GET /recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    return res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// GET /recipes/:id
exports.getRecipeById = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid soda recipe ID' });
  }
  try {
    const recipe = await Recipe.findById(id);
    if (!recipe)
      return res.status(404).json({ message: 'Soda recipe not found' });
    return res.json(recipe);
  } catch (err) {
    return res.status(400).json({ message: 'Error retrieving recipe' });
  }
};

// POST /recipes
exports.createRecipe = async (req, res) => {
  // const recipe = {
  //   recipeName: req.body.recipeName,
  //   creatorId: req.body.creatorId,
  //   sodaBase: req.body.sodaBase,
  //   syrups: req.body.syrups,
  //   cream: req.body.cream,
  //   purees: req.body.purees,
  //   otherIngredients: req.body.otherIngredients,
  //   flavorTag: req.body.flavorTag,
  // };

  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    return res.status(201).json(newRecipe);
  } catch (err) {
    return res.status(400).json({ message: 'Error creating soda recipe' });
  }
};

// PUT /recipes/:id
exports.updateRecipe = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Invalid soda recipe ID' });
  }
  // const updatedRecipe = {
  //   recipeName: req.body.recipeName,
  //   creatorId: req.body.creatorId,
  //   sodaBase: req.body.sodaBase,
  //   syrups: req.body.syrups,
  //   cream: req.body.cream,
  //   purees: req.body.purees,
  //   otherIngredients: req.body.otherIngredients,
  //   flavorTag: req.body.flavorTag,
  // };

  try {
    const result = await Recipe.findByIdAndUpdate(id, req.body, {
      new: false,
      runValidators: true,
    });

    if (!result)
      return res.status(404).json({ message: 'Soda recipe not found' });

    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ message: 'Error updating soda recipe' });
  }
};

// DELETE /recipes/:id
exports.deleteRecipe = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid soda recipe ID' });
  }
  try {
    const deleted = await Recipe.findByIdAndDelete(id);
    if (!deleted)
      return res.status(404).json({ message: 'Soda recipe not found' });
    res.json({ message: 'Soda recipe deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting soda recipe' });
  }
};
