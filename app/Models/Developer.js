'use strict'

const Model = use('Model')

class Developer extends Model {
  tasks() {
    return this.belongsToMany('App/Models/Task').pivotTable('task_developer')
  }
}

module.exports = Developer
