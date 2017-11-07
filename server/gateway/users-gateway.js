const omit = require('../utils/utils')

module.exports = users => {
  return {
    async createUser(userInfo) {
      const user = await users.insertOne(userInfo)
      return omit(user, ['password'])
    }
  }
}
