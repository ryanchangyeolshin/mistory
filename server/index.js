const { MongoClient } = require('mongodb')
const createApp = require('./create-app')

MongoClient.connect(process.env.MONGODB_URI, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  createApp(db)
    .listen(process.env.PORT, err => {
      if (err) {
        console.error(err)
      }
      else {
        console.log(`Listening to ${process.env.PORT}`)
      }
    })
})
