const express = require('express')
const bodyParser = require('body-parser')
const usersRouter = require('./routers/users-router')
const path = require('path')

module.exports = db => {
  const app = express()
  const users = db.collection('users')
  const publicPath = path.join(__dirname, '/public')

  app
    .use(express.static(publicPath))
    .use(bodyParser.json())
    .use('/api/users', usersRouter(users))

  return app
}
