const { Router } = require('express')
const uuid = require('uuid/v4')
const storiesGateway = require('../gateway/stories-gateway')
const multerUpload = require('../multer')

const storiesRouter = (stories, files) => {
  const { findAllStories, createStory } = storiesGateway(stories)
  const router = new Router()

  router
    .get('/', async (req, res) => {
      const stories = await findAllStories()
      res.status(200).json(stories)
    })
    .post('/', multerUpload, async ({ jpeg, mp3, body: { title, content } }, res) => {
      await Promise.all([
        files.upload(jpeg.fileName),
        files.upload(mp3.fileName)
      ])
      const data = {
        id: uuid(),
        title: title,
        content: content,
        views: 0,
        image: `https://storage.googleapis.com/mistory-stories/${jpeg.fileName}`,
        audio: `https://storage.googleapis.com/mistory-stories/${mp3.fileName}`
      }
      const story = await createStory(data)
      res.status(201).json(story)
    })

  return router
}

module.exports = storiesRouter
