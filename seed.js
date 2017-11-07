require('dotenv/config')
const { MongoClient } = require('mongodb')
const uuid = require('uuid/v4')

const storiesData = [
  {
    id: uuid(),
    title: 'I saw a ghost!',
    author: 'Ryan Shin',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://i.pinimg.com/originals/4e/b5/5b/4eb55b8b5de9bd8ae4ecec61b5fb2f55.jpg'
  },
  {
    id: uuid(),
    title: 'I almost won a match in Rocket League.',
    author: 'Peter Hermansen',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://i.pinimg.com/736x/f8/57/06/f85706c5f5e0b974a533ad6c8d1af258--orchids-garden-autumn-photos.jpg'
  },
  {
    id: uuid(),
    title: 'I almost won the lottery!',
    author: 'Riley Rangel',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://i.pinimg.com/736x/a7/0f/a2/a70fa29cbdd07046f782ba7ac952a2af--charlotte-north-carolina-charlotte-nc.jpg'
  }
]

MongoClient.connect(process.env.MONGODB_URI, async (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const stories = db.collection('stories')
  await stories.insertMany(storiesData)
  db.close(() => console.log('DATA HAS BEEN SEEDED'))
})
