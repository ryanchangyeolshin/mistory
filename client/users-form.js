import React from 'react'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'

export default function UsersForm(props) {
  return (
    <div>
      <TextField
        hintText="Please type a username."
        floatingLabelText="Username"
        type="text"
      /><br />
      <TextField
        hintText="Please type a password."
        floatingLabelText="Password"
        type="password"
      /><br />
      <DatePicker hintText="Please provide your birthdate." openToYearSelection={true} />
      <TextField
        hintText="Please type your email."
        floatingLabelText="Email Address"
        type="email"
      /><br />
      <TextField
        hintText="Please confirm your email address."
        floatingLabelText="Confirm Email Address"
        type="email"
      /><br />
    </div>
  )
}
