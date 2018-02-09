import React, { Component } from 'react'
import './Blog.css'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/posts">Posts</NavLink></li>
              <li><NavLink to={{
                  pathname: '/post/create',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/post/create" exact component={NewPost}/>
          <Route path="/posts" component={Posts}/>
          <Redirect from="/" to="/posts"/>
        </Switch>
      </div>
    )
  }
}

export default Blog
