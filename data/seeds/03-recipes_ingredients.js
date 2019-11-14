
exports.seed = function (knex) {
  return knex('recipes_ingredients').insert([
    {recipe_id: 1, ingredients_id: 1, quantity: 4.5 },
    {recipe_id: 1, ingredients_id: 2, quantity: 2.5 },
    {recipe_id: 1, ingredients_id: 3, quantity: 3 },
    {recipe_id: 2, ingredients_id: 4, quantity: 4.5 },
    {recipe_id: 2, ingredients_id: 5, quantity: 2.5 },
    {recipe_id: 2, ingredients_id: 6, quantity: 3 },
    {recipe_id: 2, ingredients_id: 7, quantity: 4.5 },
    {recipe_id: 2, ingredients_id: 8, quantity: 2.5 },
    {recipe_id: 3, ingredients_id: 4, quantity: 3 },
    {recipe_id: 3, ingredients_id: 6, quantity: 4.5 },
    {recipe_id: 3, ingredients_id: 7, quantity: 2.5 },
    {recipe_id: 3, ingredients_id: 8, quantity: 3 },
    {recipe_id: 3, ingredients_id: 9, quantity: 3 }
  ]);
};
