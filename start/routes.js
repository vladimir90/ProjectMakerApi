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

//Projects
Route.get('/projects', 'ProjectController.index')

Route.post('/projects', 'ProjectController.store')

Route.put('/projects/:id', 'ProjectController.update')
      .middleware(['findProject'])

//Tasks
Route.get('/tasks', 'TaskController.index')

Route.post('/tasks','TaskController.store')
     .validator('Task')

Route.delete('/tasks/:id','TaskController.delete')
      .middleware(['findTask'])

Route.put('/tasks/:id','TaskController.update')
      .middleware(['findTask'])  

//Lists
Route.get('/list', 'ListController.index')

Route.post('/list', 'ListController.store')  
      .validator('List')

