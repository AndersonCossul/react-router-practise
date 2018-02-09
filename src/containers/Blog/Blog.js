import React, { Component } from 'react'
import './Blog.css'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

class Blog extends Component {
  state = {
    auth: true // so we can see the create post page
  }

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
          {this.state.auth ? <Route path="/post/create" exact component={NewPost}/> : null}
          <Route path="/posts" component={Posts}/>
          // <Redirect from="/" to="/posts"/>
          <Route render={() => <h1>This is a 404 page. You know what it means.</h1>} />
      </Switch>
      </div>
    )
  }
}

export default Blog
