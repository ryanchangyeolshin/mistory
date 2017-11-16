import React from 'react'
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import StoryCard from './story-card'
import styles from './styles/styles'

export default function StoryList({ stories, seeMoreInfo }) {
  return (
    <div>
      <div style={styles.searchBar}>
        <i className="fa fa-search" style={styles.icon} />
        <TextField
          type="text"
          label="Search"
          name="search"
          style={styles.searchField}
        />
        <Link to="/upload">
          <Button raised color="primary" style={styles.postButton}>
            Post a Story
          </Button>
        </Link>
      </div>
      <Paper className="grid grid-pad" style={styles.paper}>
        {stories.map(story => <StoryCard key={story.id} story={story} seeMoreInfo={seeMoreInfo} />)}
      </Paper>
    </div>
  )
}
