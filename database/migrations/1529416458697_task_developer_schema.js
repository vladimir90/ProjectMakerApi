'use strict'

const Schema = use('Schema')

class TaskDeveloperSchema extends Schema {
  up () {
    this.create('task_developer', (table) => {
      table.integer('task_id')
            .unsigned()
            .index('task_id')
      table
          .integer('developer_id')
          .unsigned()
          .index('developer_id')
      table
          .foreign('task_id')
          .references('tasks.id')
          .onDelete('cascade')   
      table
          .foreign('developer_id')
          .references('developers.id')
          .onDelete('cascade')
    })
  }

  down () {
    this.drop('task_developer')
  }
}

module.exports = TaskDeveloperSchema
