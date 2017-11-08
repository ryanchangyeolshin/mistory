import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import StoryCard from './story-card'

const styles = {
  paper: {
    marginTop: 50,
    padding: 30
  },
  textField: {
    width: 1000,
    marginTop: 30
  },
  searchBar: {
    textAlign: 'center'
  },
  icon: {
    marginRight: 10
  }
}

export default function StoryList({ stories }) {
  return (
    <div>
      <div style={styles.searchBar}>
        <i className="material-icons" style={styles.icon}>search</i>
        <TextField
          type="text"
          label="Search"
          name="search"
          style={styles.textField}
        />
      </div>
      <Paper className="grid grid-pad" style={styles.paper}>
        {stories.map(story => <StoryCard key={story.id} story={story} />)}
      </Paper>
    </div>

  )
}
