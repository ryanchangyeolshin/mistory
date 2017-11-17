require('dotenv/config')
const { Router } = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const usersGateway = require('../gateway/users-gateway')
const validateLogin = require('../middlewares/validate-login')

const loginRouter = users => {
  const { findUser } = usersGateway(users)
  const router = new Router()

  router.post('/', validateLogin, async ({ body: { username, password } }, res) => {
    try {
      const user = await findUser(username)
      if (user === null) {
        res.status(404).json({ error: 'Not Found' })
      }
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({
          id: user.id,
          username: user.username
        }, process.env.TOKEN_SECRET)

        res.status(201).json({
          token,
          id: user.id,
          username: user.username
        })
      }
      res.status(400).json({ error: 'Bad Request' })
    }
    catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })

  return router
}

module.exports = loginRouter
