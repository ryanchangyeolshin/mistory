module.exports = stories => {
  return {
    async findAllStories() {
      const storiesData = await stories.find().toArray()
      return storiesData
    }
  }
}
