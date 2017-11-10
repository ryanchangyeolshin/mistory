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
      const data = {
        id: uuid(),
        title: title,
        content: content,
        image: jpeg.fileName,
        audio: mp3.fileName
      }
      const story = await createStory(data)
      await Promise.all([
        files.upload(jpeg.fileName),
        files.upload(mp3.fileName)
      ])
      res.status(201).json(story)
    })

  return router
}

module.exports = storiesRouter
