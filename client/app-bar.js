import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import styles from './styles/styles'

class ButtonAppBar extends Component {
  constructor(props) {
    super(props)
    this.renderLogin = this.renderLogin.bind(this)
  }

  renderLogin() {
    if (!this.props.token) {
      return <NavLink to="/login"><Button color="contrast">Login</Button></NavLink>
    }
    return <Typography style={styles.welcomeMessage}>Welcome {this.props.username}!</Typography>
  }

  render() {
    return (
      <div style={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton style={styles.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" style={styles.flex}>
              <NavLink to ="/">
              Mistory
              </NavLink>
            </Typography>
            {this.renderLogin()}
            <NavLink to="/signup"><Button color="contrast">Sign Up</Button></NavLink>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default ButtonAppBar
