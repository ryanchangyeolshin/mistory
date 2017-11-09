require('dotenv/config')
const fs = require('fs')
const Storage = require('@google-cloud/storage')

const storage = new Storage()

module.exports = function googleGateway(file) {
  return {
    upload() {
      storage
        .bucket(process.env.BUCKET)
        .upload('server/uploads/' + file)
        .then(() => {
          console.log(`${file} uploaded to ${process.env.BUCKET}.`)
          return fs.unlink('server/uploads/' + file)
        })
        .catch(err => console.error('ERROR:', err))
    }
  }
}
