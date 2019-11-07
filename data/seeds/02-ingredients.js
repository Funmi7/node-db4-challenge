
exports.seed = function (knex) {

  return knex('ingredients').insert([
    { ingredient_name: 'sugar' },
    { ingredient_name: 'flour' },
    { ingredient_name: 'eggs' },
    { ingredient_name: 'rice' },
    { ingredient_name: 'carrots' },
    { ingredient_name: 'oil' },
    { ingredient_name: 'tomatoes' },
    { ingredient_name: 'seasoning cubes' },
    { ingredient_name: 'salt' },
  ]);
};
