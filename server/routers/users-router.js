const { Router } = require('express')
const usersGateway = require('../gateway/users-gateway')

const usersRouter = users => {
  const { createUser } = usersGateway(users)
  const router = new Router()

  router
    .post('/', async ({ body }, res) => {
      const user = await createUser(body)
      res.status(201).json(user)
    })

  return router
}

module.exports = usersRouter
