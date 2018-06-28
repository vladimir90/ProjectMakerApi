'use strict'

const Model = use('Model')

class Team extends Model {
  projects() {
    return this.hasMany('App/Models/Project')
  }
  developers() {
    return this.hasMany('App/Models/Developer')
  }
  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Team
