const { Router } = require('express')

const usersRouter = (users) => {
  const router = new Router()

  router
    .post('/', async (req, res) => {
      try {
        const user = await users.insertOne(req.body)
        res.status(200).json(user)
      }
      catch (err) {
        console.error(err)
        res.sendStatus(404)
      }
    })

  return router
}

module.exports = usersRouter
