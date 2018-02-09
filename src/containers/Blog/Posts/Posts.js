import React, { Component } from 'react'
import Post from '../../../components/Post/Post'
import './Posts.css'
import axios from 'axios'
import { Route } from 'react-router-dom'
import FullPost from '../FullPost/FullPost'

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount () {
    axios.get('/posts')
    .then(response => {
      // as this backend is not very flexible, I'm taking all the posts but not storing all
      // also adding a hard-coded author name after me for all of them
      const posts = response.data.slice(0, 4)
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Anderson C'
        }
      })
      this.setState({posts: updatedPosts})
    })
    .catch(error => {
      this.setState({error: true})
    })
  }

  postSelectedHandler = (id) => {
    // this.props.history.push(this.props.match.url + '/' + id)
    this.props.history.push({pathname: this.props.match.url + '/' + id})
  }

  render () {
    let posts = this.state.posts.map(post => {
      return (
        // <Link to={this.props.match.url + '/' + post.id} key={post.id}>
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}/>
        // </Link>
      )
    })

    if (this.state.error) {
      posts = <p style={{textAlign: 'center', color: 'red', fontWeight: 'bold'}}>Something went wrong!</p>
    }

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
      </div>
    )
  }
}

export default Posts
