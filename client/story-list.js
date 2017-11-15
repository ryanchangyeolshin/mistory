import React from 'react'
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import StoryCard from './story-card'

const styles = {
  paper: {
    marginTop: 50,
    padding: 30
  },
  textField: {
    width: 950,
    marginTop: 30
  },
  searchBar: {
    textAlign: 'center'
  },
  icon: {
    marginLeft: 30,
    marginRight: 10
  },
  button: {
    marginLeft: 45,
    marginRight: 40
  }
}

export default function StoryList({ stories, seeMoreInfo }) {
  return (
    <div>
      <div style={styles.searchBar}>
        <i className="fa fa-search" style={styles.icon} />
        <TextField
          type="text"
          label="Search"
          name="search"
          style={styles.textField}
        />
        <Link to="/upload">
          <Button raised color="primary" style={styles.button}>
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
