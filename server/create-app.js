const express = require('express')
const bodyParser = require('body-parser')
const usersRouter = require('./routers/users-router')

module.exports = db => {
  const app = express()
  const users = db.collection('users')

  app
    .use(bodyParser.json())
    .use('/api/users', usersRouter(users))

  return app
}
