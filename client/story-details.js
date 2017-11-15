import React from 'react'
import Card, { CardContent } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import AudioPlayer from './audio-player'

const styles = {
  card: {
    margin: 50,
    padding: 30
  },
  header: {
    marginLeft: 32,
    marginRight: 55,
    padding: 20
  },
  title: {
    marginLeft: 10,
    marginRight: 30,
    marginTop: 10,
    fontSize: 50,
    fontWeight: 700
  },
  author: {
    marginLeft: 10,
    marginRight: 30,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 500
  },
  content: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 40,
    padding: 20
  },
  contentText: {
    marginLeft: 10,
    marginRight: 20
  },
  image: {
    maxWidth: 1000,
    maxHeight: 1000,
    marginLeft: 15
  }
}

export default function StoryDetails({ story }) {
  return (
    <div>
      <Card style={styles.card}>
        <Paper style={styles.header}>
          <Typography type="headline" component="h1" style={styles.title}>
            {story.title}
          </Typography>
          <Typography component="p" style={styles.author}>
            {`By: ${story.author}`}
          </Typography>
        </Paper>
        <CardContent>
          <img src={story.image} style={styles.image} />
          <Paper style={styles.content}>
            <Typography component="p" style={styles.contentText}>
              {story.content}
            </Typography>
          </Paper>
        </CardContent>
      </Card>
      <AudioPlayer src={story.audio} title={story.title} />
    </div>
  )
}
