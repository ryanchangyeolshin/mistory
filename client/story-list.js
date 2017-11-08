import React from 'react'
import Paper from 'material-ui/Paper'
import StoryCard from './story-card'

const styles = {
  paper: {
    marginTop: 50,
    padding: 30
  }
}

export default function StoryList({ stories }) {
  return (
    <Paper className="grid grid-pad" style={styles.paper}>
      {stories.map(story => <StoryCard key={story.id} story={story} />)}
    </Paper>
  )
}
