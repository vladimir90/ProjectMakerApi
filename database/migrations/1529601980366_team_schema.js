'use strict'

const Schema = use('Schema')

class TeamSchema extends Schema {
  up () {
    this.create('teams', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.text('description')
    })
  }

  down () {
    this.drop('teams')
  }
}

module.exports = TeamSchema
