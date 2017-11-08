import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
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
  }
}

export default function UsersForm({ handleSubmit }) {
  return (
    <Paper style={styles.usersForm}>
      <Typography type="headline" component="h1">Create an Account!</Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            type="text"
            label="Username"
            name="username"
            style={styles.textField}
            fullWidth={true}
          />
        </div>
        <div>
          <TextField
            type="password"
            label="Password"
            name="password"
            style={styles.textField}
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
            style={styles.textField}
            fullWidth={true}
          />
        </div>
        <div>
          <TextField
            type="email"
            label="Email Address"
            name="email"
            style={styles.textField}
            fullWidth={true}
          />
        </div>
        <div>
          <TextField
            type="email"
            label="Confirm Email Address"
            name="confirmEmail"
            style={styles.textField}
            fullWidth={true}
          />
        </div>
        <Button raised color="primary" type="submit" style={styles.submit}>Submit</Button>
      </form>
    </Paper>
  )
}
