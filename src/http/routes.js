const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Enjoy!! two')
    next()
  })
}

module.exports = routes
