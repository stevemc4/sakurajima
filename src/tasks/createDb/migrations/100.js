import DB from '../../../lib/db'

export default function run () {
  return DB.schema
    .createTable('author', table => {
      table.increments('id').primary()
      table.string('name', 255)
      table.string('desc', 512)
      table.string('image', 255)
    })
    .createTable('book', table => {
      table.increments('id').primary()
      table.string('name', 512).notNullable()
      table.string('image', 255)
    })
    .createTable('bookAuthor', table => {
      table.integer('book').notNullable().unsigned().references('id').inTable('books')
      table.integer('author').notNullable().unsigned().references('id').inTable('author')
    })
    .createTable('role', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
    })
    .createTable('user', table => {
      table.increments('id').primary()
      table.string('username', 255).unique().index()
      table.string('password', 512).notNullable()
      table.string('name', 512).notNullable()
      table.string('email', 255).unique().index().notNullable()
      table.integer('role').notNullable().unsigned().references('id').inTable('role')
      table.dateTime('registeredDate').notNullable()
    })
}
