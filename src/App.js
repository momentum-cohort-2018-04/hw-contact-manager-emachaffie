/* global localStorage */
import React, { Component } from 'react'
import './App.css'
// import request from 'superagent'
import Contacts from './Contacts'
import LoginPage from './LoginPage'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddContact from './AddContact'
import firebase from './firebase'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import Dashboard from './Dashboard'
import EditContact from './EditContact'

class App extends Component {
  constructor (props) {
    let database = firebase.database()
    super()
  }

  // componentDidMount () {
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.setState({
  //       user: user
  //     })
  //   })
  // }

  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Dashboard} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/add' component={AddContact} />
          <Route path='/edit/:id' render={(props) => <EditContact {...props} />} />
          <Route path='/login' component={LoginPage} />
        </div>
      </Router>
    )
  }
}

export default App
