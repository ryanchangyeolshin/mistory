import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import styles from './styles/styles'

export default function ButtonAppBar() {
  return (
    <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton style={styles.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" style={styles.flex}>
            Mistory
          </Typography>
          <NavLink to="/"><Button color="contrast">Login</Button></NavLink>
          <NavLink to="/signup"><Button color="contrast">Sign Up</Button></NavLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}
