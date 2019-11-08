const express = require('express');

const recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json({
        error: `Unable to fetch recipes ${error.message}`
      })
    })
});

router.get('/:id/ingredients', (req, res) => {
  const { id } = req.params;
  recipes.getShoppingList(id)
    .then(lists => {
      res.status(200).json(lists)
    })
    .catch(error => {
      res.status(500).json({
        message: `Failed to get ingredients ${error.message}`
      })
    })
})

router.get('/:id/steps', (req, res) => {
  const { id } = req.params;
  recipes.getInstructions(id)
    .then(steps => {
      res.status(200).json(steps)
    })
    .catch(error => {
      res.status(500).json({
        message: `Failed to get steps ${error.message}`
      })
    })
  })

  module.exports = router;