import React from 'react'
import Card, { CardContent } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import AudioPlayer from './audio-player'
import styles from './styles/styles'

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
