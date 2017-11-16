require('dotenv/config')
const { describe, it, before, beforeEach, after } = require('mocha')
const { expect } = require('chai')
const { MongoClient } = require('mongodb')
const uuid = require('uuid/v4')
const storiesGateway = require('../server/gateway/stories-gateway')

describe('storiesGateway', () => {
  let db
  let stories
  let story
  let findAllStories
  let createStory
  let findStoryById

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
      findAllStories = storiesGateway(stories).findAllStories
      createStory = storiesGateway(stories).createStory
      findStoryById = storiesGateway(stories).findStoryById
      done()
    })
  })

  after('disconnect from MongoDB', done => {
    db.close(() => done())
  })

  beforeEach('Delete the stories collection and insert one stories', async () => {
    await stories.deleteMany({})
    await stories.insertOne(story)
  })

  describe('findAllStories()', () => {
    it('should return an array of all of the stories', async () => {
      const data = await findAllStories()
      const { id, title, author, content, image } = data[0]
      expect(id).to.equal(story.id)
      expect(author).to.equal(story.author)
      expect(title).to.equal(story.title)
      expect(content).to.equal(story.content)
      expect(image).to.equal(story.image)
    })
  })

  describe('createStory()', () => {
    it('should insert a new story and return it', async () => {
      const testStory = {
        id: uuid(),
        title: 'I aced the exam!',
        author: 'Johnny Woo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'http://blog.homefinder.com/wp-content/uploads/2013/11/aplus4.jpg'
      }
      const { id, title, author, content, image } = await createStory(testStory)
      expect(id).to.equal(testStory.id)
      expect(title).to.equal(testStory.title)
      expect(author).to.equal(testStory.author)
      expect(content).to.equal(testStory.content)
      expect(image).to.equal(testStory.image)
    })
  })

  describe('findStoryById()', () => {
    it('should return all of the information about the story', async () => {
      const data = await findStoryById(story.id)
      const { id, title, author, content, image } = data
      expect(id).to.equal(story.id)
      expect(author).to.equal(story.author)
      expect(title).to.equal(story.title)
      expect(content).to.equal(story.content)
      expect(image).to.equal(story.image)
    })
  })
})
