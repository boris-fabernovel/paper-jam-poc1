import React from 'react'
import { Router, Route } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'
import './App.css'

import Layout from './components/Layout'

const history = createHashHistory()

export default class App extends React.Component {
  render () {
    return (<Router history={history}>
      <Route path="/" component={Layout}/>
    </Router>)
  }
}

