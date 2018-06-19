'use strict'
const Task = use('App/Models/Task')
const Developer = use('App/Models/Developer')

class TaskController {
  async index({ response }) {

    const tasks = await Task.query().with('developers').fetch()

    response.status(200).json({
      data: tasks
    }) 
  }

  async store ({request, response, params: {id}}) {
    const { name, description, status = 0, priority = 0, developer } = request.post()

    const project_id = id

    const task = new Task()

    task.fill({
      name, 
      description,
      project_id,
      status,
      priority
    })

    //If you assign developer, then update pivot and assign developer to task
    // if (developers && developers.length > 0) {
    //   await task.developers().attach(developers)
    //   task.developers = await task.developers().fetch()
    // }

    await task.save()
    
    response.status(200).json({
      message: 'Task created'
    })
  }
  
  async assign ({request, response, params: {id}}) {
    const { developers } = request.post()

    const task = request.post().task

    console.log(task)
    //find user

    //attach to task

    //If you assign developer, then update pivot and assign developer to task
    // if (developers && developers.length > 0) {
    //   await task.developers().attach(developers)
    //   task.developers = await task.developers().fetch()
    // }

    return 'Assign user to task with id' + id
  }

  async delete ({response, request, params: {id}}) {

    const task = request.post().task

    await task.delete()

    response.status(200).json({
      message: 'Task deleted'
    })
  }

  async update ({response, request, params: {id}}) {

    const {name, description, priority = 0, status = 0 } = request.post()

    const task  = request.post().task 

    task.name = name
    task.description = description
    task.status = status
    task.priority = priority

    await task.save()

    response.status(200).json({
      message: 'Task updated'
    })
  }
}

module.exports = TaskController
