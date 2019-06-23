'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  types () {
    return this.hasMany('App/Models/Type')
  }
  sizes () {
    return this.hasMany('App/Models/Type')
  }
  order () {
    return this.belongsTo('App/Models/Order')
  }
}

module.exports = Product
