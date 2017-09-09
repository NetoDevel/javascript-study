const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Enjoy')
    next()
  })
}

module.exports = routes
