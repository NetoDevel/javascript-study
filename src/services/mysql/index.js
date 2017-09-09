const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'netinho123',
  database: 'node_api'
})

const categoryModule = require('./categories')({ connection })

module.exports = {
  categories: () => categoryModule
}

