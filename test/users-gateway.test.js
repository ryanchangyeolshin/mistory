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
  let findUser

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
      findUser = usersGateway(users).findUser
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
      const { id, username, birthdate, email, confirmEmail } = await createUser(testUser)
      expect(id).to.equal(testUser.id)
      expect(username).to.equal(testUser.username)
      expect(birthdate).to.equal(testUser.birthdate)
      expect(email).to.equal(testUser.email)
      expect(confirmEmail).to.equal(testUser.confirmEmail)
    })
  })

  describe('findUserById()', () => {
    it('should find the user with the associated ID and return user info', async () => {
      const { id, username, password, birthdate, email, confirmEmail } = await findUser(user.username)
      expect(id).to.equal(user.id)
      expect(username).to.equal(user.username)
      expect(password).to.equal(user.password)
      expect(birthdate).to.deep.equal(user.birthdate)
      expect(email).to.equal(user.email)
      expect(confirmEmail).to.equal(user.confirmEmail)
    })

    it('should return null when the user is not found', async () => {
      const notFound = await findUser('LMAO')
      expect(notFound).to.equal(null)
    })
  })
})
