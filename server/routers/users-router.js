const { Router } = require('express')
const bcrypt = require('bcrypt')
const usersGateway = require('../gateway/users-gateway')

const usersRouter = users => {
  const { createUser } = usersGateway(users)
  const router = new Router()

  router
    .post('/', async ({ body: { id, username, password, birthdate, email, confirmEmail } }, res) => {
      const salt = await bcrypt.genSalt()
      const hash = await bcrypt.hash(password, salt)
      const data = {
        id,
        username,
        password: hash,
        birthdate,
        email,
        confirmEmail
      }
      const user = await createUser(data)
      res.status(201).json(user)
    })

  return router
}

module.exports = usersRouter
