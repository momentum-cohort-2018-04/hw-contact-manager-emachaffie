/* global localStorage */
import Dashboard from './Dashboard'
import React, { Component } from 'react'
// import request from 'superagent'
import './App.css'
import uuid from 'uuid/v4'
import firebase from './firebase.js'

let database = firebase.database()

class AddContact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      nameError: '',
      email: '',
      nameError: '',
      address: '',
      addressError: '',
      house: null,
      houseError: '',
      birthday: null,
      birthdayError: '',
      company: '',
      companyError: '',
      title: '',
      titleError: '',
      nameValid: false,
      emailValid: false,
      addressValid: false,
      houseValid: false,
      birthdayValid: false,
      companyValid: false,
      titleValid: false,
      formValid: false
      // formErrors: {name: '', email: '', address: '', house: '', birthday: '', company: '', title: ''}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    console.log(value)
    console.log(name)
    this.setState({[name]: value})
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('submitting')
    if (this.state.name.length < 1) {
      this.setState({
        nameError: 'Please enter a name'
      })
    }
    if (this.state.email.str.includes('@') === false) {
      this.setState({
        emailError: 'Must enter valid email address'
      })
    }
    const newId = uuid()
    const newContactList = database.ref('contacts/')
    const newContact = {
      id: newId,
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      house: this.state.house,
      birthday: this.state.birthday,
      company: this.state.company,
      title: this.state.title
    }
    newContactList.push(newContact)
    this.props.history.push('/Contacts')
  }

  render () {
    return (
      <div>
        <h2 className='header'>Add a Contact</h2>
        <p>Muggles and those who have not passed Year 3 Incantations, please fill out this form. Otherwise, you may use the <em>'addendum contacto'</em> spell.</p>
        <form className='addContactForm' type='submit' onSubmit={this.handleSubmit}>
        Name: <input type='text' name='name' errorText={this.state.nameError} onChange={this.handleChange} />
        Email: <input type='text' name='email' errorText={this.state.emailError} onChange={this.handleChange} />
        Address: <input type='text' name='address' errorText={this.state.addressError} onChange={this.handleChange} />
        Hogwarts House:
          <select name='house' onChange={this.handleChange}>
            <option value='None'>No House</option>
            <option value='Gryffindor'>Gryffindor</option>
            <option value='Hufflepuff'>Hufflepuff</option>
            <option value='Ravenclaw'>Ravenclaw</option>
            <option value='Slytherin'>Slytherin</option>
            errorText={this.state.houseError}
          </select>
        Birthday: <input type='text' name='birthday' errorText={this.state.birthdayError} onChange={this.handleChange} />
        Organization: <input type='text' name='company' errorText={this.state.companyError} onChange={this.handleChange} />
        Job Title: <input type='text' name='title' errorText={this.state.titleError} onChange={this.handleChange} />
          <button className='submitButton' type='submit'>Submit</button>
          <button className='cancelButton' onClick={this.props.notAddingContact}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default AddContact
