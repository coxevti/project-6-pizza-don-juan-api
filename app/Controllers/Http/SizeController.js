'use strict'

const Size = use('App/Models/Size')

class SizeController {
  async index () {
    const sizes = await Size.all()
    return sizes
  }
  async store ({ request, response }) {
    const data = request.only(['type_id', 'name', 'price', 'thumbnail'])
    const size = await Size.create(data)
    return response.status(201).json(size)
  }
}

module.exports = SizeController
