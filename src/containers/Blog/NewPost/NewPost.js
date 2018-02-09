import React, { Component } from 'react'
import axios from 'axios'
import './NewPost.css'
import { Redirect } from 'react-router-dom'

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Anderson C',
    submited: false
  }

  postDataHandler = () => {
    // could have passed directly in axios call but this is cleaner
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    }
    axios.post('/posts', data)
    .then(response => {
      this.setState({submited: true})
    })
    .catch(error => {
      alert('Failed to create new post.\n' + error)
    })
  }

  render () {
    let redirect = null
    if (this.state.submited) {
      redirect = <Redirect to="/posts" />
    }

    return (
      <div className="NewPost">
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
        <label>Content</label>
        <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
        <label>Author</label>
        <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
          <option value="Anderson C">Anderson C</option>
          <option value="Max">Max</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    )
  }
}

export default NewPost
