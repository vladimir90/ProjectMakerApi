'use strict'

const Project = use('App/Models/Project')

class ProjectController {
  async index ({ response, request }) {
    
    const projects = await Project
                    .query()
                    .with('tasks')
                    .fetch()

    response.status(200).json({
      data: projects
    })
  }

  async store ({ request, response }) {

    const { name, description } = request.post()

    const project =  new Project()

    project.fill({
      name,
      description
    })

    await project.save()

    response.status(200).json({
      data: project,
      message: 'Project Created'
    })
  }

}

module.exports = ProjectController
