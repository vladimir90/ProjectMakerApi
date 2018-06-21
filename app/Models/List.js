'use strict'

const Model = use('Model')

class List extends Model {
  project() {
    return this.belongsTo('App/Models/Project')
  }
  tasks() {
    return this.hasMany('App/Models/Task')
  }
}

module.exports = List
