module.exports = stories => {
  return {
    async findAllStories() {
      const { ops } = await stories.find().toArray()
      return ops
    }
  }
}
