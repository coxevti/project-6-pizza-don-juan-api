'use strict'

const Product = use('App/Models/Product')

class ProductController {
  async index () {
    const products = await Product.query()
      .with('types.sizes')
      .fetch()
    return products
  }
  async store ({ request, response }) {
    const data = request.only(['name', 'thumbnail', 'description'])
    const product = await Product.create(data)
    return response.status(201).json(product)
  }
}

module.exports = ProductController
