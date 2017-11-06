module.exports = users => {
  return {
    async createUser(userInfo) {
      const { data } = await users.insertOne(userInfo)
      return data
    },
    async findAllUsers() {
      const usersData = await users.find().toArray()
      return usersData
    },
    async findUser(query) {
      const user = await users.findOne({ query })
      return user
    }
  }
}
