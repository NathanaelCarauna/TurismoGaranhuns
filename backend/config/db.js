//Importa as configurações de conexão com o banco de dados
const config = require('../knexfile');
// Importa o knex já estabelecendo uma conexão com o banco de dados
const knex = require('knex')(config);

knex.migrate.latest([config])
module.exports = knex;