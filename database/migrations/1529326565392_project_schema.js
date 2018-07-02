'use strict'

const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.text('description')
      table
          .integer('user_id')
          .unsigned()
          .index('user_id')
      table
          .foreign('user_id')
          .references('users.id')
          .onDelete('cascade')
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
