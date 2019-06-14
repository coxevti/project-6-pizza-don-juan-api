'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Type extends Model {
  sizes () {
    return this.belongsToMany('App/Models/Size')
      .pivotTable('size_types')
      .withPivot(['price'])
  }
}

module.exports = Type
