import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Dropzone from 'react-dropzone'
import Button from 'material-ui/Button'
import styles from './styles/styles'

function onDrop(files) {
  console.log(files)
}

export default function StoryForm({ handleStorySubmit }) {
  return (
    <Paper style={styles.storyForm}>
      <Typography type="headline" component="h1">Upload a Story!</Typography>
      <form onSubmit={handleStorySubmit}>
        <div>
          <TextField
            type="text"
            label="Title"
            name="title"
            style={styles.storyInputField}
            fullWidth={true}
          />
        </div>
        <div>
          <TextField
            id="multiline-static"
            name="content"
            label="Content"
            multiline
            rows="8"
            style={styles.storyInputField}
            margin="normal"
            fullWidth={true}
          />
        </div>
        <div className="dropzone" style={styles.dropzone}>
          <Dropzone accept="image/jpeg, image/png" onDrop={onDrop} name="image" className="col-1-2" style={styles.imageDrop}>
            <p>Upload an Image</p>
          </Dropzone>
          <Dropzone accept="audio/*" onDrop={onDrop} name="audio" className="col-1-2" style={styles.audioDrop}>
            <p>Upload an Audio File</p>
          </Dropzone>
        </div>
        <div>
          <Button raised color="primary" type="submit" style={styles.submitStory}>Submit</Button>
        </div>
      </form>
    </Paper>
  )
}
