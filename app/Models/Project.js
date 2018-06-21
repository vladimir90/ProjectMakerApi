'use strict'

const Model = use('Model')

class Project extends Model {
  tasks() {
    return this.hasMany('App/Models/Task')
  }
  lists() {
    return this.hasMany('App/Models/List')
  }
  team() {
    return this.belongsTo('App/Models/Team')
  }
}

module.exports = Project
