import Ver100 from './migrations/100'

async function createDatabase () {
  await Ver100()
}

export default createDatabase
