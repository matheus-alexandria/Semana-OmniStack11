/**
 * O UP é o método responsável por criar uma tabela
 */

exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

/**
 * O método down é resposável por voltar atrás em uma decisão, deletar uma tabela
 */

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
