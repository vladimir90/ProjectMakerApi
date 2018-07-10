'use strict'
const List = use('App/Models/List')
const Task = use('App/Models/Task')
class ListController {
  async index ({response}) {
    const list = await List.query().with('tasks').fetch()
    response.status(200).json({
      data: list
    }) 
  }

  async store ({ request, response}) {

    const { name, status = 0, project_id } = request.post()

    const list =  await List.create({name, status, project_id})

    response.status(200).json({
      data: list,
      message: 'List Created'
    })
  }

  async projectList ({ request, response, params: {id}}) {

    const {tasks = false, archived = false} = request.get()

    const query = List.query().where('project_id','=',id)

    if (tasks === 'true') {
      query.with('tasks')
    }

    if (archived === 'true') {
      query.where('archived',true)
    } else {
      query.where('archived', false || null)
    }

    const list = await query.fetch()
    
    response.status(200).json({
      data: list
    }) 
  }

  async show () {
  }

  async edit () {
  }

  async update ({request, response}) {

    const {name, status, project_id, archived = false, sort = []} = request.post()

    const list  = request.post().list

    if (sort.length > 0) {
      this.sortList(sort)
    }
    //If list is archived, archive all task in that list
    if (archived) {
      await Task.query().where('list_id','=',list.id).update({ archived })
      list.archived = archived
    }

    list.project_id = project_id
    list.status = status
    list.name = name

    await list.save()

    response.status(200).json({
      message: 'List updated'
    })
  }

  async delete ({request,response}) {

    const list = request.post().list

    await list.delete()

    response.status(200).json({
      message: 'List deleted'
    })
  }
  async sortList(ids) {
    for (var i = 0; i<ids.length;i++) {
      let id = ids[i]
      let sortIndex = i + 1
      await List.query().where('id','=',id).update({ sort: sortIndex })
    }
  }
}

module.exports = ListController
