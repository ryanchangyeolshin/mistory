import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'

const userFormStyle = { margin: '50px 0', padding: '20px 30px', textAlign: 'center' }

export default function UsersForm({ handleSubmit }) {
  return (
    <Paper style={userFormStyle} zDepth={1}>
      <h1>Create an Account!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            hintText="Please type a username."
            floatingLabelText="Username"
            type="text"
            name="username"
            fullWidth = {true}
          />
        </div>
        <div>
          <TextField
            hintText="Please type a password."
            floatingLabelText="Password"
            type="password"
            name="password"
            fullWidth = {true}
          />
        </div>
        <div>
          <DatePicker
            hintText="Please provide your birthdate."
            openToYearSelection={true}
            fullWidth = {true}
            name="birthdate"
            style={{ marginTop: '10px' }}
          />
        </div>
        <div>
          <TextField
            hintText="Please type your email."
            floatingLabelText="Email Address"
            type="email"
            name="email"
            fullWidth = {true}
          />
        </div>
        <div>
          <TextField
            hintText="Please confirm your email address."
            floatingLabelText="Confirm Email Address"
            type="email"
            name="confirmEmail"
            fullWidth = {true}
          />
        </div>
        <RaisedButton type="submit" label="Submit" primary={true} style={{ margin: '20px 0' }} />
      </form>
    </Paper>
  )
}
