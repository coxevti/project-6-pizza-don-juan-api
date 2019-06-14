'use strict'

const Type = use('App/Models/Type')

class TypeController {
  async index () {
    const types = await Type.all()
    return types
  }
  async store ({ request, response }) {
    const data = request.only(['product_id', 'name', 'thumbnail'])
    const type = await Type.create(data)
    return response.status(201).json(type)
  }
}

module.exports = TypeController
