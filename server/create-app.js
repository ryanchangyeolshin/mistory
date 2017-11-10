const express = require('express')
const bodyParser = require('body-parser')
const storiesRouter = require('./routers/stories-router')
const usersRouter = require('./routers/users-router')
const path = require('path')

module.exports = (db, files) => {
  const app = express()
  const users = db.collection('users')
  const stories = db.collection('stories')
  const publicPath = path.join(__dirname, '/public')

  app
    .use(express.static(publicPath))
    .use(bodyParser.json())
    .use('/api/stories', storiesRouter(stories, files))
    .use('/api/users', usersRouter(users))

  return app
}
