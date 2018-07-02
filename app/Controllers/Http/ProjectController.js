'use strict'

const Project = use('App/Models/Project')

class ProjectController {
  async index ({ response, request, auth }) {
    
    let id = auth.user.id

    const projects = await Project
                    .query()
                    .where('user_id','=', id)
                    .with('tasks')
                    .fetch()

    response.status(200).json({
      data: projects
    })
  }

  async store ({ request, response, auth }) {

    const { name, description, team_id } = request.post()

    let user_id = auth.user.id

    const project =  new Project()

    project.fill({
      name,
      description,
      user_id,
      team_id
    })

    await project.save()

    response.status(200).json({
      data: project,
      message: 'Project Created'
    })
  }

  async update ({request, response, params: {id}}) {

    const { name, description } = request.post()

    const project  = request.post().project

    project.description = description
    project.name = name

    await project.save()

    response.status(200).json({
      message: 'Project updated'
    })
  }
}

module.exports = ProjectController
