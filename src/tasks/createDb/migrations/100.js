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
      table.text('desc')
      table.string('image', 255)
    })
    .createTable('bookAuthor', table => {
      table.integer('book').notNullable().unsigned().references('id').inTable('book')
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
    .createTable('permission', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
    })
    .createTable('rolePermission', table => {
      table.integer('role').notNullable().unsigned().references('id').inTable('role')
      table.integer('permission').notNullable().unsigned().references('id').inTable('permission')
    })
    .createTable('borrowing', table => {
      table.increments('id').primary()
      table.dateTime('borrowingTime').notNullable()
      table.dateTime('returningTime')
      table.integer('book').notNullable().unsigned().references('id').inTable('book')
      table.integer('borrower').notNullable().unsigned().references('id').inTable('user')
      table.integer('staff').notNullable().unsigned().references('id').inTable('user')
    })
}
