// PUT /recipes/:id
exports.updateRecipe = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid soda recipe ID' });
  }

  try {
    const result = await Recipe.findByIdAndUpdate(id, req.body, {
      new: false,
      runValidators: true,
    });

    if (!result) {
      return res.status(404).json({ message: 'Soda recipe not found' });
    }

    return res.status(204).send(); // ✅ No Content
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
    if (!deleted) {
      return res.status(404).json({ message: 'Soda recipe not found' });
    }
    return res.status(204).send(); // ✅ No Content (optional: could also return 200 with a message)
  } catch (err) {
    return res.status(400).json({ message: 'Error deleting soda recipe' });
  }
};
