'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SizeType extends Model {
  type () {
    return this.hasMany('App/Models/Type', 'type_id', 'id')
  }
  size () {
    return this.hasMany('App/Models/Size', 'size_id', 'id')
  }
}

module.exports = SizeType
