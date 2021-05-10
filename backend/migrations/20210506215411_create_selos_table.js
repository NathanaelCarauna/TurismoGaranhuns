
exports.up = function(knex) {
  return knex.schema.createTable('selos', table => {
    table.increments('id').primary();
    table.string('nome', 20).notNull();    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('selos');
};
