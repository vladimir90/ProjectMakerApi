'use strict'

const Schema = use('Schema')

class ListSchema extends Schema {
  up () {
    this.create('lists', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.integer('status')
      table
        .integer('project_id')
        .unsigned()
        .index('project_id')
      table
        .foreign('project_id')
        .references('projects.id')
        .onDelete('cascade')
    })
  }

  down () {
    this.drop('lists')
  }
}

module.exports = ListSchema
