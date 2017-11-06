module.exports = users => {
  return {
    async createUser(userInfo) {
      const user = await users.insertOne(userInfo)
      return user
    },
    async findAllUsers() {
      const usersData = await users.find().toArray()
      return usersData
    },
    async findUserById(id) {
      const user = await users.findOne({ id })
      return user
    }
  }
}
