import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Validation(props) {
  return (
    <div>
      {props.username ? <Redirect from="/login" to="/" /> : props.children}
    </div>
  )
}
