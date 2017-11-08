require('dotenv/config')
const { describe, it, before, beforeEach, after } = require('mocha')
const { expect } = require('chai')
const { MongoClient } = require('mongodb')
const uuid = require('uuid/v4')
const axios = require('axios')
const createApp = require('../server/create-app')

describe('stories-router', () => {
  let db
  let stories
  let story
  let server

  before('Connect to MongoDB', done => {
    MongoClient.connect(process.env.MONGODB_URI, (err, _db) => {
      if (err) {
        done(err)
      }
      db = _db
      stories = db.collection('stories')
      story = {
        id: uuid(),
        title: 'I saw a ghost!',
        author: 'Ryan Shin',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://i.pinimg.com/originals/4e/b5/5b/4eb55b8b5de9bd8ae4ecec61b5fb2f55.jpg'
      }
      server = createApp(_db)
        .listen(process.env.PORT, () => done())
    })
  })

  after('Disconnect MongoDB and server', done => {
    db.close()
    server.close(() => done())
  })

  beforeEach('Delete the stories from MongoDB and then insert one story', async () => {
    await stories.deleteMany({})
    await stories.insertOne(story)
  })

  describe('GET /api/stories/', () => {
    it('should return an array of stories', async () => {
      const { status, data } = await axios.get(`http://localhost:${process.env.PORT}/api/stories`)
      const { id, title, author, content, image } = data[0]
      expect(id).to.include(story.id)
      expect(title).to.include(story.title)
      expect(author).to.include(story.author)
      expect(content).to.include(story.content)
      expect(image).to.include(story.image)
      expect(status).to.equal(200)
    })
  })
})
