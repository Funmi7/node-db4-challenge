const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id) {
    return db('recipes_ingredients as ri')
    .join('ingredients as i', 'ri.ingredients_id', 'i.id')
    .select('ri.id', 'i.ingredient_name', 'ri.quantity')
    .where('ri.recipe_id', id)
}

function getInstructions(id) {
    return db('steps as s')
    .join('recipes as r', 'r.id', 's.recipe_id')
    .select('s.id', 's.step_number', 's.instructions')
    .where('s.recipe_id', id)
    .orderBy('s.step_number', 'asc')
}