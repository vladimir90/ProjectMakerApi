'use strict'

const Schema = use('Schema')

class ListSchema extends Schema {
  up () {
    this.create('lists', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.integer('status')
    })
  }

  down () {
    this.drop('lists')
  }
}

module.exports = ListSchema
