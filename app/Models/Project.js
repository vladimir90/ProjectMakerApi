'use strict'

const Model = use('Model')

class Project extends Model {
  tasks() {
    return this.hasMany('App/Models/Task')
  }
}

module.exports = Project
