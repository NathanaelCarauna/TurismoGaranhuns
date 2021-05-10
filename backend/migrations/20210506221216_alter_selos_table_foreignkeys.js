
exports.up = function(knex) {
  return knex.schema.alterTable('selos', table => {
    table.bigInteger('id_ponto_turistico').unsigned().index().references('id').inTable('pontosTuristicos')

  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('selos', table => {
      table.dropColumn('id_ponto_turistico')
  })
};
