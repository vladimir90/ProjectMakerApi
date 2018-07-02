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

//User
Route.get('/user-profile', 'UserController.show').middleware('auth')

//Auth
Route.post('/login', 'UserController.login').validator('UserLogin')
Route.post('/logout', 'UserController.logout').middleware('auth')
Route.post('/register', 'UserController.register').validator('UserStore')

//Projects
Route.get('/projects', 'ProjectController.index').middleware('auth')
Route.post('/projects', 'ProjectController.store').validator('Project').middleware('auth')
Route.put('/projects/:id', 'ProjectController.update').middleware(['findProject'])

//Tasks
Route.get('/tasks', 'TaskController.index')
Route.get('/project/tasks/:id', 'TaskController.projectTasks') //get tasks for project with project id
Route.post('/tasks','TaskController.store').validator('Task')
Route.delete('/tasks/:id','TaskController.delete').middleware(['findTask'])
Route.put('/tasks/:id','TaskController.update').middleware(['findTask'])
 
//Lists
Route.get('/list', 'ListController.index')
Route.get('/project/list/:id', 'ListController.projectList').middleware('auth') //get list for project with project id
Route.post('/list', 'ListController.store').validator('List')
Route.delete('/list/:id', 'ListController.delete').middleware(['findList'])

//Developers
Route.get('/developers', 'DeveloperController.index')
Route.put('/developers/:id', 'DeveloperController.update')   

//Teams
Route.get('/teams', 'TeamController.index')
Route.get('/teams/:id', 'TeamController.show').middleware(['findTeam'])
Route.post('/teams', 'TeamController.store').validator('Team')
// Route.put('/teams/:id', 'TeamController.update').middleware(['findTeam']) --Need to fix this, u cant update foreign teams
Route.delete('/teams/:id', 'TeamController.delete').middleware(['findTeam']) //How to delete this now?

