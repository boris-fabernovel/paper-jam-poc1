import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <header className="App-header">
      <h1 className="App-title">PAPER JAM</h1>
      <div className="menu">
        <div><Link to='/article1'>Article 1</Link></div>
        <div><Link to='/article2'>Article 2</Link></div>
      </div>
    </header>
  )
}