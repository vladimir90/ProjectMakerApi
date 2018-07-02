'use strict'
const Team = use('App/Models/Team')

class TeamController {
  async index ({response,auth}) {
    try {
      await auth.check()

      let id = auth.user.id

      const teams = await Team.query().where('user_id','=',id).with('projects.tasks').fetch()

      response.status(200).json({
        data: teams
      })
  
    } catch (error) {
      response.status(403).json({
        message: 'Missing or invalid jwt token'
      })
    }
  }

  async store ({request, response, auth}) {

    try {
      await auth.check()
      
      const { name, description, user_id } = request.post()

      const team = await Team.create({ name, description, user_id})

      response.status(200).json({
        message: 'Team created'
      })
  
    } catch (error) {
      response.status(403).json({
        message: 'Missing or invalid jwt token'
      })
    }
  }

  async show ({response, request, auth}) {

    try {
      await auth.check()
      
      const team  = request.post().team

      response.status(200).json({
        data: team
      })
  
    } catch (error) {
      response.status(403).json({
        message: 'Missing or invalid jwt token'
      })
    }
  }


  async update ({ request, response, auth}) {
    try {
      await auth.check()
      
      let id = auth.user.id
      const { name, description } = request.post()

      const team  = request.post().team
  
      team.description = description
      team.name = name
  
      await team.save()
  
      response.status(200).json({
        message: 'Team updated'
      })
  
    } catch (error) {
      response.status(403).json({
        message: 'Missing or invalid jwt token'
      })
    }
  }

  async delete ({request, response, auth}) {
    try {
      await auth.check()
      
      const team = request.post().team

      await team.delete()
  
      response.status(200).json({
        message: 'Team deleted'
      })
    } catch (error) {
      response.status(403).json({
        message: 'Missing or invalid jwt token'
      })
    }
  }
}

module.exports = TeamController
