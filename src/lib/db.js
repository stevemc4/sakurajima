import knex from 'knex'
import path from 'path'
import fs from 'fs'

if (!fs.existsSync(path.join(process.cwd(), 'sakurajima.db'))) {
  fs.writeFileSync(path.join(process.cwd(), 'sakurajima.db'), "")
}

export default knex({
  client: 'sqlite3',
  connection: path.join(process.cwd(), 'sakurajima.db'),
  useNullAsDefault: true
})
