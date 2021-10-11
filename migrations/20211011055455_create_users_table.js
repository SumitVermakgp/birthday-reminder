
exports.up = function(knex) {
  return knex.schema
  .createTable('users', function(table) {
      table.increments().primary()
      table.string('name', 255).notNullable()
      table.string('email', 255).notNullable()
      table.date('birthdate').notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
