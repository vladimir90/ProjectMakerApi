'use strict'
const Team = use('App/Models/Team')

class FindTeam {
  async handle ({ request, response, params: {id} }, next) {

    const team = await Team.find(id)

    if (!team) {
      return response.status(404).json({
        message: 'Team not found'
      })
    }

    request.body.team = team
    // call next to advance the request
    await next()
  }
}

module.exports = FindTeam