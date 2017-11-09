const { Router } = require('express')
const storiesGateway = require('../gateway/stories-gateway')
const multerUpload = require('../multer')
const googleGateway = require('../google-gateway')

const storiesRouter = stories => {
  const { findAllStories, createStory } = storiesGateway(stories)
  const router = new Router()

  router
    .get('/', async (req, res) => {
      const stories = await findAllStories()
      res.status(200).json(stories)
    })
    .post('/', multerUpload, async ({ jpeg, mp3, body: { title, content } }, res) => {
      const data = {
        title: title,
        content: title,
        image: jpeg.fileName,
        audio: mp3.fileName
      }
      const story = createStory(data)
      googleGateway(jpeg.fileName).upload()
      googleGateway(mp3.fileName).upload()
      res.status(201).json(story)
    })

  return router
}

module.exports = storiesRouter
