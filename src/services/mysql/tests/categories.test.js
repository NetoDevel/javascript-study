import test from 'ava'
const { connection, errorHandler } = require('./setup')

const categories = require('../categories')({ connection, errorHandler })

const create = () => categories.save('categoria teste')

test.beforeEach(t => connection.query('TRUNCATE TABLE categories'))
test.after.always(t => connection.query('TRUNCATE TABLE categories'))

test('Lista de categorias', async t => {
  await create()
  const list = await categories.all()
  t.is(list.categories.length, 1)
  t.is(list.categories[0].name, 'categoria teste')
})

test('Criação de categoria', async t => {
  const result = await create()
  t.is(result.category.name, 'categoria teste')
})

test('Atualização de categoria', async t => {
  const insert = await create()
  const updated = await categories.update(insert.category.id, 'updated-nome')
  t.is(updated.category.name, 'updated-nome')
})

test('Remoção de categoria', async t => {
  const insert = await create()
  const remove = await categories.del(insert.category.id)
  t.is(remove.affectedRows, 1)
})
