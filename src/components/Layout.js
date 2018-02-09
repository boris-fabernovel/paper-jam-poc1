import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Article1 from './Article1'
import Article2 from './Article2'

import Header from './Header'

export default () => {
  return <div>
    <Header/>
    <Switch>
      <Route path="/article1" component={Article1}/>
      <Route path="/article2" component={Article2}/>
    </Switch>
  </div>
}
