'use strict'
const Developer = use('App/Models/Developer')
class DeveloperController {
  async index ({ request, response}) {
    const developers = await Developer.all()

    response.status(200).json({
      data: developers
    }) 
    
  }

  async create () {
  }

  async store () {
  }

  async show () {
  }

  async edit () {
  }

  async update () {

    const { first_name, last_name, project_id, team_id  } = request.post()

    const developer  = request.post().developer

    developer.first_name = first_name
    developer.last_name = last_name
    developer.project_id = project_id
    developer.team_id = team_id

    await developer.save()

    response.status(200).json({
      message: 'Developer updated'
    })
  }

  async destroy () {
  }

}

module.exports = DeveloperController
