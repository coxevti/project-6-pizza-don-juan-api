'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('set null')
      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .onDelete('set null')
      table
        .integer('type_id')
        .unsigned()
        .references('id')
        .inTable('types')
        .onDelete('set null')
      table
        .integer('size_id')
        .unsigned()
        .references('id')
        .inTable('sizes')
        .onDelete('set null')
      table.string('delivery_address').notNullable()
      table.text('observation')
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
