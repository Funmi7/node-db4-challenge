
exports.seed = function (knex) {
  return knex('recipes_ingredients').insert([
    { recipes_id: 1, ingredients_id: '1', quantiy: '4.5' },
    { recipes_id: 1, ingredients_id: '2', quantiy: '2.5' },
    { recipes_id: 1, ingredients_id: '3', quantiy: '3' },
    { recipes_id: 2, ingredients_id: '4', quantiy: '4.5' },
    { recipes_id: 2, ingredients_id: '5', quantiy: '2.5' },
    { recipes_id: 2, ingredients_id: '6', quantiy: '3' },
    { recipes_id: 2, ingredients_id: '7', quantiy: '4.5' },
    { recipes_id: 2, ingredients_id: '8', quantiy: '2.5' },
    { recipes_id: 3, ingredients_id: '4', quantiy: '3' },
    { recipes_id: 3, ingredients_id: '6', quantiy: '4.5' },
    { recipes_id: 3, ingredients_id: '7', quantiy: '2.5' },
    { recipes_id: 3, ingredients_id: '8', quantiy: '3' },
    { recipes_id: 3, ingredients_id: '9', quantiy: '3' }
  ]);
};
