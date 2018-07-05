'use strict'
const List = use('App/Models/List')
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

    const list = await List.query().with('tasks').where('project_id','=', id).fetch()
    
    response.status(200).json({
      data: list
    }) 
  }

  async show () {
  }

  async edit () {
  }

  async update ({request, response}) {

    const {name, status, project_id} = request.post()

    const list  = request.post().list

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
}

module.exports = ListController
