const db = require('../services/mysql')

const routes = (server) => {
  server.get('category', async (req, res, next) => {
    try {
      res.send(await db.categories().all())
      next()
    } catch (error) {
      res.send(error)
      next()
    }
  })

  server.post('category', async (req, res, next) => {
    try {
      const { name } = req.params
      res.send(await db.categories().save(name))
      next()
    } catch (error) {
      res.send(error)
      next()
    }
  })
}

module.exports = routes
