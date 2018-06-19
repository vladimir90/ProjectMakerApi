'use strict'

const Model = use('Model')

class Developer extends Model {
  tasks() {
    return this.belongsToMany('App/Models/Task')
  }
}

module.exports = Developer
