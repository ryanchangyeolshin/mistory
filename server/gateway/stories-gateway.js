module.exports = stories => {
  return {
    async findAllStories() {
      const storiesData = await stories.find().toArray()
      return storiesData
    },
    async createStory(data) {
      const storyData = await stories.insertOne(data)
      return storyData
    }
  }
}
