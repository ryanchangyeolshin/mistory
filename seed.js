require('dotenv/config')
const { MongoClient } = require('mongodb')
const uuid = require('uuid/v4')

const storiesData = [
  {
    id: uuid(),
    title: 'I saw a ghost!',
    author: 'Ryan Shin',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    views: 9000,
    image: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/10/ghost-796x498.jpg'
  },
  {
    id: uuid(),
    title: 'I almost won a match in Rocket League.',
    author: 'Peter Hermansen',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    views: 2,
    image: 'http://cdn.edgecast.steamstatic.com/steam/apps/252950/header.jpg?t=1507673535'
  },
  {
    id: uuid(),
    title: 'I almost won the lottery!',
    author: 'Riley Rangel',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    views: 40000,
    image: 'http://www.scam-detector.com/support/images/blog_img/thum/blog-1479185078.jpg'
  },
  {
    id: uuid(),
    title: 'Life as a Software Developer',
    author: 'Ron Perris',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    views: 9999,
    image: 'https://www.techdotmatrix.com/wp-content/uploads/2016/10/Programming-languages.jpg'
  },
  {
    id: uuid(),
    title: 'Jamazon',
    author: 'Tim Davis',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    views: 25000,
    image: 'https://vignette.wikia.nocookie.net/clubpenguin/images/8/8a/Music_Jam_09_Logo.png/revision/latest?cb=20140304014809'
  }
]

MongoClient.connect(process.env.MONGODB_URI, async (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const stories = db.collection('stories')
  await stories.deleteMany({})
  await stories.insertMany(storiesData)
  db.close(() => console.log('DATA HAS BEEN SEEDED'))
})
