import React, { Component } from 'react'
import './Blog.css'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'
import { Route, NavLink } from 'react-router-dom'

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to={{
                  pathname: '/post/create',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts}/>
        <Route path="/post/create" exact component={NewPost}/>
        <Route path="/post/:id" exact component={FullPost}/>
      </div>
    )
  }
}

export default Blog
