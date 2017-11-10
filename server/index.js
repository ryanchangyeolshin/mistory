require('dotenv/config')
const { MongoClient } = require('mongodb')
const createApp = require('./create-app')
const googleGateway = require('./google-gateway')

MongoClient.connect(process.env.MONGODB_URI, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const files = googleGateway(process.env.BUCKET)

  createApp(db, files)
    .listen(process.env.PORT, err => {
      if (err) {
        console.error(err)
      }
      else {
        console.log(`Listening to ${process.env.PORT}`)
      }
    })
})
