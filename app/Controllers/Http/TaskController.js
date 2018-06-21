'use strict'
const Task = use('App/Models/Task')
const Developer = use('App/Models/Developer')

class TaskController {
  async index({ response }) {

    const tasks = await Task.query().with('developers').with('list').fetch()

    response.status(200).json({
      data: tasks
    }) 
  }

  async store ({request, response}) {
    const { name, description, list_id, project_id, priority = 0, developers} = request.post()

    const task = await Task.create({ name, description, project_id, list_id, priority})

    // if (developers && developers.length > 0) {
      // await task.developers().attach(1)
      // task.developers = await task.developers().fetch()
    // }

    response.status(200).json({
      message: 'Task created'
    })
  }
  

  async delete ({response, request, params: {id}}) {

    const task = request.post().task

    await task.delete()

    response.status(200).json({
      message: 'Task deleted'
    })
  }

  async update ({response, request}) {

    const {name, description, priority = 0, list_id, project_id, developers = []} = request.post()

    const task  = request.post().task 

    task.name = name
    task.description = description
    task.list_id = list_id
    task.project_id = project_id
    task.priority = priority

    await task.save()

    response.status(200).json({
      message: 'Task updated'
    })
  }

  async projectTasks({ response, params: {id} }) {

    const tasks = await Task.query().with('developers').where('project_id','=', id).fetch()
    response.status(200).json({
      data: tasks
    }) 
  }
}

module.exports = TaskController
