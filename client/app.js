import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import UsersForm from './users-form'

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Mistory"
        />
        <UsersForm />
      </div>
    )
  }
}
