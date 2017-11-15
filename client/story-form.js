import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Dropzone from 'react-dropzone'
import Button from 'material-ui/Button'

const styles = {
  usersForm: {
    marginLeft: 100,
    marginRight: 100,
    marginTop: 50,
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 40,
    textAlign: 'center'
  },
  textField: {
    marginTop: 30
  },
  submit: {
    marginTop: 30,
    marginBottom: 30
  },
  dropzone: {
    display: 'inline-block',
    width: 1000,
    marginTop: 30,
    textAlign: 'center',
    fontFamily: 'Roboto'
  },
  image: {
    width: 300,
    marginRight: 20,
    border: '1px dashed black'
  },
  audio: {
    width: 300,
    marginLeft: 20,
    border: '1px dashed black'
  }
}

function onDrop(files) {
  console.log(files)
}

export default function StoryForm({ handleStorySubmit }) {
  return (
    <Paper style={styles.usersForm}>
      <Typography type="headline" component="h1">Upload a Story!</Typography>
      <form onSubmit={handleStorySubmit}>
        <div>
          <TextField
            type="text"
            label="Title"
            name="title"
            style={styles.textField}
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
            style={styles.textField}
            margin="normal"
            fullWidth={true}
          />
        </div>
        <div className="dropzone" style={styles.dropzone}>
          <Dropzone accept="image/jpeg, image/png" onDrop={onDrop} name="image" className="col-1-2" style={styles.image}>
            <p>Upload an Image</p>
          </Dropzone>
          <Dropzone accept="audio/*" onDrop={onDrop} name="audio" className="col-1-2" style={styles.audio}>
            <p>Upload an Audio File</p>
          </Dropzone>
        </div>
        <div>
          <Button raised color="primary" type="submit" style={styles.submit}>Submit</Button>
        </div>
      </form>
    </Paper>
  )
}
