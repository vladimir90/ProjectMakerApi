'use strict'
const Team = use('App/Models/Team')

class TeamController {
  async index ({response}) {

    const teams = await Team.query().with('projects').fetch()

    response.status(200).json({
      data: teams
    })

  }

  async store ({request, response}) {
    const { name, description } = request.post()

    const team = await Team.create({ name, description})

    response.status(200).json({
      message: 'Team created'
    })
  }

  async show () {
  }

  async edit () {
  }

  async update () {
  }

  async destroy () {
  }
}

module.exports = TeamController
