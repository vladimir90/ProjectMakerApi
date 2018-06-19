'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/projects', 'ProjectController.index')

Route.post('/projects', 'ProjectController.store')

//Tasks
Route.get('/tasks', 'TaskController.index')

Route.post('/tasks/:id','TaskController.store')
     .validator('Task')

Route.delete('/tasks/:id','TaskController.delete')
      .middleware(['findTask'])

Route.put('/tasks/:id','TaskController.update')
      .middleware(['findTask']) 

//Assign to task user with id
Route.put('/tasks/:id/assign', 'TaskController.assign')
      .middleware(['findTask'])

