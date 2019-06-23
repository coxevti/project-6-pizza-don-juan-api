'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderProductSchema extends Schema {
  up () {
    this.create('order_products', (table) => {
      table.increments()
      table.integer('order_id')
        .unsigned()
        .references('id')
        .inTable('orders')
        .onDelete('cascade')
      table.integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .onDelete('cascade')
      table.integer('size_type_id')
        .unsigned()
        .references('id')
        .inTable('size_types')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('order_products')
  }
}

module.exports = OrderProductSchema
