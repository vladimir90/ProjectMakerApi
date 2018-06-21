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

    const { name, status = 0 } = request.post()

    const list =  await List.create({name, status})

    response.status(200).json({
      data: list,
      message: 'List Created'
    })
  }

  async show () {
  }

  async edit () {
  }

  async update () {
  }

  async destroy () {
  }
}

module.exports = ListController
