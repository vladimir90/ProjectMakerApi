'use strict'

const Model = use('Model')

class Task extends Model {
  project() {
    return this.belongsTo('App/Models/Project')
  }
  developers() {
    return this.belongsToMany('App/Models/Developer').pivotTable('task_developer')
  }
}

module.exports = Task
