'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SizeTypeSchema extends Schema {
  up () {
    this.create('size_types', table => {
      table.increments()
      table
        .integer('size_id')
        .unsigned()
        .references('id')
        .inTable('sizes')
        .onUpdate('cascade')
        .onDelete('cascade')
      table
        .integer('type_id')
        .unsigned()
        .references('id')
        .inTable('types')
        .onUpdate('cascade')
        .onDelete('cascade')
      table.decimal('price', 10, 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('size_types')
  }
}

module.exports = SizeTypeSchema
