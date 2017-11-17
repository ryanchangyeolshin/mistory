import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import styles from './styles/styles'

export default function Login({ handleUserLogin }) {
  return (
    <Paper style={styles.loginForm}>
      <Typography type="headline" component="h1">Login!</Typography>
      <form onSubmit={handleUserLogin}>
        <div>
          <TextField
            type="text"
            label="Username"
            name="username"
            style={styles.loginInputField}
            fullWidth={true}
          />
        </div>
        <div>
          <TextField
            type="text"
            label="Password"
            name="password"
            style={styles.loginInputField}
            fullWidth={true}
          />
        </div>
        <div>
          <Button raised color="primary" type="submit" style={styles.submitLogin}>Login</Button>
        </div>
      </form>
    </Paper>
  )
}
