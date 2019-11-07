
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', table => {
      table.increments();
			table.text('recipe_name', 128)
			.notNullable();
  })
  .createTable('ingredients', table => {
      table.increments()
			table.text('ingredient_name', 128)
			.notNullable();
  })
  .createTable('recipes_ingredients', table => {
      table.increments()
      table.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
			.inTable('recipes')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
      table.integer('ingredients_id')
      .unsigned()
      .notNullable()
      .references('id')
			.inTable('ingredients')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
      table.float('quantity')
      .unsigned();
  })
  .createTable('steps', table => {
		table.increments()
		table.integer('step_number')
		.unsigned()
		.notNullable();
		table.text('instructions')
		.notNullable();
		table.integer('recipe_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('recipes')
		.onUpdate('CASCADE')
		.onDelete('CASCADE');
	
	})
};

exports.down = function(knex) {
	return knex.schema
	.dropTableIfExists('steps')
	.dropTableIfExists('recipes_ingredients')
	.dropTableIfExists('ingredients')
	.dropTableIfExists('recipes')
};
