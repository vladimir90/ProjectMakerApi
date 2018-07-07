'use strict'
const Task = use('App/Models/Task')
const Developer = use('App/Models/Developer')

class TaskController {
  async index({request, response }) {

    const {developers, list, archived} = request.get()

    const query = Task.query()

    if (developers === 'true') {
      query.with('developers')
    }
    if (list === 'true') {
      query.with('list')
    }
    if (archived === 'true') {
      query.where('archived', true)
    } else {
      query.where('archived', false || null)
    }

    const tasks = await query.fetch()

    response.status(200).json({
      data: tasks
    }) 
  }

  async store ({request, response}) {
    const { name, description, list_id, priority = 0, developers} = request.post()

    const task = await Task.create({ name, description, list_id, priority})

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

    const {name, description, priority = 0, list_id, project_id, developers = [],archived = false, sort = []} = request.post()

    const task  = request.post().task 

    if (sort.length > 0) {
      this.sortTasks(sort)
    }

    task.name = name
    task.description = description
    task.list_id = list_id
    task.project_id = project_id
    task.priority = priority
    task.archived = archived

    await task.save()

    response.status(200).json({
      message: 'Task updated'
    })
  }
  async sortTasks(ids) {
    for (var i = 0; i<ids.length;i++) {
      let id = ids[i]
      let sortIndex = i + 1
      await Task.query().where('id','=',id).update({ sort: sortIndex })
    }
  }
  async projectTasks({ response, params: {id} }) {

    const tasks = await Task.query().with('developers').where('project_id','=', id).fetch()
    response.status(200).json({
      data: tasks
    }) 
  }
}

module.exports = TaskController
