'use strict'
const Team = use('App/Models/Team')

class TeamController {
  async index ({response}) {

    const teams = await Team.query().with('projects.tasks').fetch()

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

  async show ({response, request}) {

    const team  = request.post().team

    response.status(200).json({
      data: team
    })
  }

  async edit () {
  }

  async update () {
    const { name, description } = request.post()

    const team  = request.post().team

    team.description = description
    team.name = name

    await team.save()

    response.status(200).json({
      message: 'Project updated'
    })
  }

  async delete ({request, response}) {
    const team = request.post().team

    await team.delete()

    response.status(200).json({
      message: 'Team deleted'
    })
  }
}

module.exports = TeamController
