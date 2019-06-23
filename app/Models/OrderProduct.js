'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderProduct extends Model {
  sizeType () {
    return this.hasMany('App/Models/SizeType', 'size_type_id', 'id')
  }
  product () {
    return this.hasMany('App/Models/Product', 'product_id', 'id')
  }
}

module.exports = OrderProduct
