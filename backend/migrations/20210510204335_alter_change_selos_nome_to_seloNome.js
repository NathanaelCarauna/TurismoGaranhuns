
exports.up = function(knex) {
    return knex.schema.alterTable('selos', table => {
        table.dropColumn('nome');
        table.string('selo_nome', 50).notNull();
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('selos', table => {
        table.dropColumn('selo_nome');
        table.string('nome', 50).notNull();
    })
};
