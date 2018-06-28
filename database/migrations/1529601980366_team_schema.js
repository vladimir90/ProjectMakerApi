'use strict'

const Schema = use('Schema')

class TeamSchema extends Schema {
  up () {
    this.create('teams', (table) => {
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
    this.drop('teams')
  }
}

module.exports = TeamSchema
