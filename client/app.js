import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import axios from 'axios'
import uuid from 'uuid/v4'
import ButtonAppBar from './app-bar'
import StoryList from './story-list'
import UsersForm from './users-form'
import StoryForm from './story-form'
import StoryDetails from './story-details'
import Login from './login'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleUserSubmit = this.handleUserSubmit.bind(this)
    this.handleStorySubmit = this.handleStorySubmit.bind(this)
    this.handleUserLogin = this.handleUserLogin.bind(this)
    this.seeMoreInfo = this.seeMoreInfo.bind(this)
    this.state = {
      stories: [],
      story: {},
      token: null,
      id: null,
      username: null
    }
  }

  async componentDidMount() {
    if (this.props.history.location.pathName !== '/') {
      this.props.history.push('/')
    }
    const { data } = await axios.get('/api/stories')
    this.setState({ stories: data })
  }

  async handleUserSubmit(e) {
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

  async handleStorySubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    e.target.reset()
    const { data } = await axios.post('/api/stories', formData)
    this.setState({ stories: this.state.stories.concat(data) }, () => this.props.history.push('/'))
  }

  async seeMoreInfo(id) {
    const { data } = await axios.get(`/api/stories/${id}`)
    this.setState({ story: data }, () => this.props.history.push(`/stories/${data.id}`))
  }

  async handleUserLogin(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const login = {
      id: uuid(),
      username: formData.get('username'),
      password: formData.get('password')
    }
    e.target.reset()
    const { data: { token, id, username } } = await axios.post('/login', login)
    this.setState({
      token,
      id,
      username
    }, () => this.props.history.push('/'))
  }

  render() {
    return (
      <div>
        <ButtonAppBar token={this.state.token} username={this.state.username} />
        <Route
          exact path="/"
          render={props => <StoryList {...props} stories={this.state.stories} seeMoreInfo={this.seeMoreInfo} />} />
        <Route
          exact path="/login"
          render={props => <Login {...props} handleUserLogin={this.handleUserLogin} />} />
        <Route
          exact path="/stories/:id"
          render={props => <StoryDetails {...props} story={this.state.story} />} />
        <Route
          exact path="/signup"
          render={props => <UsersForm {...props} handleUserSubmit={this.handleUserSubmit} />} />
        <Route
          exact path="/upload"
          render={props => <StoryForm {...props} handleStorySubmit={this.handleStorySubmit} />} />
      </div>
    )
  }
}

export default withRouter(App)
