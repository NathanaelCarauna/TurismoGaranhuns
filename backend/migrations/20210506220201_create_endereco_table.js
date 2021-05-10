
exports.up = function(knex) {
  return knex.schema.createTable('endereco', table => {
      table.increments('id').primary();
      table.string('bairro', 20).notNull();
      table.string('rua', 50).notNull();
      table.string('numero', 5).notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('endereco');
};
