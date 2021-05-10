
exports.up = function(knex) {
  return knex.schema.createTable("interage", table => {
      table.increments('id').primary();
      table.bigInteger('id_usuario').unsigned().index().references('id').inTable('users')
      table.bigInteger('id_pontoTuristico').unsigned().index().references('id').inTable('pontosTuristicos')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('interage')
};
