exports.up = (knex, Promise) => {
    return knex.schema.createTable('activities', (table) => {
      table.increments('id').primary()
      table.string('title')
      table.string('address')
      table.string('info')
      table.string('img')
      table.string('intensity')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('activities')
  }
