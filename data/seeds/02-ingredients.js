
exports.seed = function (knex) {

  return knex('ingredients').insert([
    { ingredients: 'sugar' },
    { ingredients: 'flour' },
    { ingredients: 'eggs' },
    { ingredients: 'rice' },
    { ingredients: 'carrots' },
    { ingredients: 'oil' },
    { ingredients: 'tomatoes' },
    { ingredients: 'seasoning cubes' },
    { ingredients: 'salt' },
  ]);
};
