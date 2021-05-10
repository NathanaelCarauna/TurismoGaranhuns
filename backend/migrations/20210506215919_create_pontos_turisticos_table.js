
exports.up = function(knex) {
  return knex.schema.createTable('pontosTuristicos', table => {
      table.increments('id').primary();
      table.string('nome', 100).notNull();
      table.string('descricao', 500).notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pontosTuristicos');
};
