import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import styles from './styles/styles'

export default function UsersForm({ handleUserSubmit }) {
  return (
    <Paper style={styles.usersForm}>
      <Typography type="headline" component="h1">Create an Account!</Typography>
      <form onSubmit={handleUserSubmit}>
        <div>
          <TextField
            type="text"
            label="Username"
            name="username"
            style={styles.userInputField}
            fullWidth={true}
          />
        </div>
        <div>
          <TextField
            type="password"
            label="Password"
            name="password"
            style={styles.userInputField}
            fullWidth={true}
          />
        </div>
        <div>
          <TextField
            id="birthdate"
            name="birthdate"
            label="Birthdate"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            style={styles.userInputField}
            fullWidth={true}
          />
        </div>
        <div>
          <TextField
            type="email"
            label="Email Address"
            name="email"
            style={styles.userInputField}
            fullWidth={true}
          />
        </div>
        <div>
          <TextField
            type="email"
            label="Confirm Email Address"
            name="confirmEmail"
            style={styles.userInputField}
            fullWidth={true}
          />
        </div>
        <Button raised color="primary" type="submit" style={styles.submitUser}>Submit</Button>
      </form>
    </Paper>
  )
}
