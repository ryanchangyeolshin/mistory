require('dotenv/config')
const fs = require('fs')
const Storage = require('@google-cloud/storage')
const { promisify } = require('util')
const unlink = promisify(fs.unlink)
const storage = new Storage()

module.exports = function googleGateway(bucket) {
  return {
    upload(file) {
      return storage
        .bucket(bucket)
        .upload('server/uploads/' + file)
        .then(() => unlink('server/uploads/' + file))
    }
  }
}
