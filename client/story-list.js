import React from 'react'
import Paper from 'material-ui/Paper'
import { GridList, GridTile } from 'material-ui/GridList'
import SearchBar from 'material-ui-search-bar-enhanced'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 30
  },
  gridList: {
    width: 1500,
    height: 450,
    margin: 10
  },
  button: {
    textSize: 2,
    marginRight: 10
  }
}

export default function StoryList({ stories }) {
  return (
    <div>
      <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
          margin: '0 auto',
          width: 1000
        }}
      />
      <Paper style={styles.root} zdepth={5}>
        <GridList
          cellHeight={250}
          style={styles.gridList}
        >
          {stories.map((story) => (
            <GridTile
              key={story.image}
              title={story.title}
              subtitle={<span>by <b>{story.author}</b></span>}
              actionIcon={<RaisedButton label="More" primary={true} style={styles.button} />}
              cols={0.5}
            >
              <img src={story.image} />
            </GridTile>
          ))}
        </GridList>
      </Paper>
    </div>
  )
}
