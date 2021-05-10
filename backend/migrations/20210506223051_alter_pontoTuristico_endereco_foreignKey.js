exports.up = function(knex) {
    return knex.schema.alterTable('pontosTuristicos', table => {
      table.bigInteger('id_endereco').unsigned().index().references('id').inTable('endereco')
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('pontosTuristicos', table => {
        table.dropColumn('id_endereco')
    })
  };
  