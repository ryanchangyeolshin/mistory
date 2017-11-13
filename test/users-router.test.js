require('dotenv/config')
const { describe, it, before, beforeEach, after } = require('mocha')
const { expect } = require('chai')
const { MongoClient } = require('mongodb')
const uuid = require('uuid/v4')
const axios = require('axios')
const createApp = require('../server/create-app')
const googleGateway = require('../server/google-gateway')

describe('users-router', () => {
  let db
  let users
  let user
  let server

  before('Connect to MongoDB', done => {
    MongoClient.connect(process.env.MONGODB_URI, (err, _db) => {
      if (err) {
        done(err)
      }
      const files = googleGateway()
      db = _db
      users = db.collection('users')
      user = {
        id: uuid(),
        username: 'johnsmith',
        password: 'iamjohnsmith',
        birthdate: new Date(1992, 8, 8),
        email: 'johnsmith@gmail.com',
        confirmEmail: 'johnsmith@gmail.com'
      }
      server = createApp(_db, files)
        .listen(process.env.PORT, () => done())
    })
  })

  after('Disconnect MongoDB and server', done => {
    db.close()
    server.close(() => done())
  })

  beforeEach('Delete the users from MongoDB and then insert one user', async () => {
    await users.deleteMany({})
    await users.insertOne(user)
  })

  describe('POST /api/users/', () => {
    it('should insert a new user and return it', async () => {
      const testUser = {
        id: uuid(),
        username: 'janedoe',
        password: 'iamjanedoe',
        birthdate: '9/28/1992',
        email: 'janedoe@gmail.com',
        confirmEmail: 'janedoe@gmail.com'
      }
      const { status, data } = await axios.post(`http://localhost:${process.env.PORT}/api/users`, testUser)
      const { id, username, birthdate, email, confirmEmail } = data
      expect(id).to.include(testUser.id)
      expect(username).to.include(testUser.username)
      expect(birthdate).to.include(testUser.birthdate)
      expect(email).to.include(testUser.email)
      expect(confirmEmail).to.include(testUser.confirmEmail)
      expect(status).to.equal(201)
    })
  })
})
