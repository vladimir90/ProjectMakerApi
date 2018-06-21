'use strict'
const Developer = use('App/Models/Developer')

class FindDeveloper {
  async handle ({ request, response, params: {id} }, next) {

    const developer = await Developer.find(id)

    if (!ldeveloper) {
      return response.status(404).json({
        message: 'Developer not found',
        id
      })
    }

    request.body.developer = developer
    // call next to advance the request
    await next()
  }
}

module.exports = FindDeveloper