const { Router } = require('express')
const storiesGateway = require('../gateway/stories-gateway')

const storiesRouter = stories => {
  const { findAllStories } = storiesGateway(stories)
  const router = new Router()

  router
    .get('/', async (req, res) => {
      const stories = await findAllStories()
      res.status(200).json(stories)
    })

  return router
}

module.exports = storiesRouter
