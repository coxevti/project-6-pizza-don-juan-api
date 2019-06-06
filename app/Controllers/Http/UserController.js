'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request, response }) {
    const data = await request.only(['fullname', 'password', 'email'])
    const user = await User.create(data)
    return response.status(201).json(user)
  }
}

module.exports = UserController
