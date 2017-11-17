const { describe, it, before, after } = require('mocha')
const chai = require('chai')
const expect = chai.expect
const { MongoClient } = require('mongodb')
const run = require('express-unit')
const { spy } = require('sinon')
const sinonChai = require('sinon-chai')
const createApp = require('../server/create-app')
const googleGateway = require('../server/google-gateway')
const validateLogin = require('../server/middlewares/validate-login')

describe('validateLogin() middleware', () => {
  let db
  let server
  let files

  before('Connect to MongoDB', done => {
    MongoClient.connect(process.env.MONGODB_URI, (err, _db) => {
      if (err) {
        done(err)
      }
      db = _db
      files = googleGateway()
      server = createApp(_db, files)
        .listen(process.env.PORT, () => done())
    })
  })

  after('Disconnect MongoDB and server', done => {
    db.close()
    server.close(() => done())
  })

  describe('Give non-string username and password', () => {
    const setup = (req, res, next) => {
      req.body.username = null
      req.body.password = null
      next()
    }
    it('throws a Bad Request error', (done) => {
      run(setup, validateLogin, (err, req, res) => {
        console.log(err)
        expect(err)
          .to.be.an('error')
          .with.property('message', 'Credentials must include non-empty "username" and "password" strings.')
        done()
      })
    })
  })
})
