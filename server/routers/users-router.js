const { Router } = require('express')

const usersRouter = (users) => {
  const router = new Router()

  router
    .post('/', async ({ body }, res) => {
      try {
        const user = await users.insertOne(body)
        res.status(201).json(user)
      }
      catch (err) {
        console.error(err)
        res.sendStatus(400)
      }
    })
    .get('/', async (req, res) => {
      try {
        const usersData = await users.find().toArray()
        res.status(202).json(usersData)
      }
      catch (err) {
        console.error(err)
        res.sendStatus(404)
      }
    })
    .get('/:id', async ({ params: { id } }, res) => {
      try {
        const user = await users.findOne({ id })
        res.status(202).json(user)
      }
      catch (err) {
        console.error(err)
        res.sendStatus(404)
      }
    })

  return router
}

module.exports = usersRouter
