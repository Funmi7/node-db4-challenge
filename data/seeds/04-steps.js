
exports.seed = function(knex) {
      return knex('table_name').insert([
        {step_number: 1, instructions: 'Add flour, sugar and eggs', recipe_id:'1'},
        {step_number: 2, instructions: 'put in oven to bake', recipe_id: '1'},
        {step_number: 1, instructions: 'Add rice, carrots, seasoning, salt, oil ', recipe_id: '2'},
        {step_number: 2, instructions: 'Put in pot to boil', recipe_id: '2'},
        {step_number: 1, instructions: 'Add rice, seasoning, salt, oil ', recipe_id: '3'},
        {step_number: 2, instructions: 'Put in pot to cook', recipe_id: '3'},
      ]);
};
