import React, { Component } from 'react'
import Button from './Button'

export default class extends Component { 

  state = {
    title: '',
    content: ''
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  
  render() {

    const { addNote, history } = this.props

    return <div>
      <h2>New Note</h2>
      <hr />
      <label htmlFor="title">
        <h3>Title</h3>
        <input 
          onChange={this.handleChange}
          id="title" 
          type="text" 
          name="title" 
        />
      </label>  
      <label htmlFor="content">
        <h3>Text</h3>
        <textarea 
          onChange={this.handleChange}
          id="content" 
          rows="20" 
          cols="100" 
          name="content"
        />
      </label>
      <Button 
        onClick={() => {
          addNote(this.state)
          history.push('/')
        }}
        variant='primary'
        width={200}
        mt={3}
      >
        Add Note
      </Button>
    </div>
  }
}
