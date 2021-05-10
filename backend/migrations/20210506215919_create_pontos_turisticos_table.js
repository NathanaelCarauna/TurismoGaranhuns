
exports.up = function(knex) {
  return knex.schema.createTable('pontosTuristicos', table => {
      table.increments('id').primary();
      table.string('nome', 50).notNull();
      table.string('descricao').notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pontosTuristicos');
};
