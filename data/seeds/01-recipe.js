
exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipe_name: 'Cake' },
    { recipe_name: 'Fried rice' },
    { recipe_name: 'Jollof rice' }
  ]);
};
