'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('register', 'AuthController.register').validator('Auth/Register')
Route.post('login', 'AuthController.login')

Route.group(() => {
  Route.get('orders', 'OrderController.index')
  Route.resource('products', 'ProductController').apiOnly()
  Route.resource('types', 'TypeController').apiOnly()
  Route.resource('sizes', 'SizeController').apiOnly()
}).middleware(['auth'])
