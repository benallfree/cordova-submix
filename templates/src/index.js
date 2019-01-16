import React from 'react'
import { render } from 'react-dom'
import { App } from './App'

document.addEventListener(
  'deviceready',
  () => {
    render(<App />, document.getElementById('app'))
  },
  false,
)
