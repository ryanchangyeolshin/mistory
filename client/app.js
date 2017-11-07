import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import axios from 'axios'
import uuid from 'uuid/v4'
import StoryList from './story-list'
import UsersForm from './users-form'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { stories: [] }
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/stories')
    this.setState({ stories: data })
  }

  async handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const userData = {
      id: uuid(),
      username: formData.get('username'),
      password: formData.get('password'),
      birthdate: formData.get('birthdate'),
      email: formData.get('email'),
      confirmEmail: formData.get('confirmEmail')
    }
    e.target.reset()
    await axios.post('/api/users', userData)
  }

  render() {
    return (
      <MuiThemeProvider>
        <AppBar title="Mistory" />
        <Route exact path="/" render={props => <StoryList {...props} stories={this.state.stories} />} />
        <Route exact path="/signup" render={props => <UsersForm {...props} handleSubmit={this.handleSubmit} />} />
      </MuiThemeProvider>
    )
  }
}
