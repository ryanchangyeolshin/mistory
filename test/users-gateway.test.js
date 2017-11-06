require('dotenv/config')
const { describe, it, before, beforeEach, after } = require('mocha')
const { expect } = require('chai')
const { MongoClient } = require('mongodb')
const uuid = require('uuid/v4')
const usersGateway = require('../server/gateway/users-gateway')

describe('usersGateway', () => {
  let db
  let users
  let user
  let createUser

  before('Connect to MongoDB', done => {
    MongoClient.connect(process.env.MONGODB_URI, (err, _db) => {
      if (err) {
        done(err)
      }
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
      createUser = usersGateway(users).createUser
      done()
    })
  })

  after('disconnect from MongoDB', done => {
    db.close(() => done())
  })

  beforeEach('Delete the users collection and insert one user', async () => {
    await users.deleteMany({})
    await users.insertOne(user)
  })

  describe('createUser()', () => {
    it('should insert a new user and return the user info', async () => {
      const testUser = {
        id: uuid(),
        username: 'janedoe',
        password: 'iamjanedoe',
        birthdate: new Date(1992, 9, 28),
        email: 'janedoe@gmail.com',
        confirmEmail: 'janedoe@gmail.com'
      }
      const { ops } = await createUser(testUser)
      const { id, username, password, birthdate, email, confirmEmail } = ops[0]
      expect(id).to.equal(testUser.id)
      expect(username).to.equal(testUser.username)
      expect(password).to.equal(testUser.password)
      expect(birthdate).to.equal(testUser.birthdate)
      expect(email).to.equal(testUser.email)
      expect(confirmEmail).to.equal(testUser.confirmEmail)
    })
  })
})
