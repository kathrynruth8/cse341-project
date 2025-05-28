const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    recipeName: {
      type: String,
      required: [true, 'Soda name is required'],
    },
    creatorId: { type: String, required: true },
    sodaBase: { type: String, required: [true, 'Soda base is required'] },
    syrups: { type: [String], default: [] },
    cream: { type: Boolean, default: false },
    purees: { type: [String], default: [] },
    otherIngredients: { type: [String], default: [] },
    flavorTag: { type: String, required: [true, 'Flavor tag is required'] },
  },
  { collection: 'sodas' }
);

module.exports = mongoose.model('Recipe', recipeSchema);
