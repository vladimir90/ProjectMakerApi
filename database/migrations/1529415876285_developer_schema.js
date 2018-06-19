'use strict'

const Schema = use('Schema')

class DeveloperSchema extends Schema {
  up () {
    this.create('developers', (table) => {
      table.increments()
      table.timestamps()
      table.string('username',80).notNullable().unique()
      table.string('first_name')
      table.string('last_name')
    })
  }

  down () {
    this.drop('developers')
  }
}

module.exports = DeveloperSchema
