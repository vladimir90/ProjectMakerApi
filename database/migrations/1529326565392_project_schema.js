'use strict'

const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.text('description')
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
