const omit = require('../../utils/utils')

module.exports = users => {
  return {
    async createUser(userInfo) {
      const { ops } = await users.insertOne(userInfo)
      const omitted = omit(ops[0], ['password'])
      return omitted
    },
    async findUser(username) {
      const user = await users.findOne({ username })
      return user
    }
  }
}
