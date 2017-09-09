const categories = (deps) => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('SELECT * FROM categories', (error, results) => {
          if (error) {
            errorHandler(error, 'Failed to list categories', reject)
            return false
          }
          resolve({ categories: results })
        })
      })
    },
    save: (name) => {}
  }
}

module.exports = categories
