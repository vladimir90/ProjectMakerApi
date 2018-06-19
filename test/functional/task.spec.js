'use strict'

const { test, trait } = use('Test/Suite')('Task')
const Task = use('App/Models/Task')

trait('Test/ApiClient')

test('get list of tasks', async ({ client }) => {

  const response = await client.get('/tasks').end()
  response.assertStatus(200)

})