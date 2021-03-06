
exports.up = (knex, Promise) => {
  return knex.schema.createTable('revenue',(table)=>{
    table.increments('id').primary()
    table.text('name').notNullable()
    table.integer('oneTime').notNullable()
    table.integer('monthly').notNullable()
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('revenue')
};
