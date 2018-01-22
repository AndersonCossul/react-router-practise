import React, { Component } from 'react'
import './Blog.css'
import axios from 'axios'

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
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
                        author: 'Anderson'
                    }
                })
                this.setState({posts: updatedPosts})
            })
            .catch(error => {
                this.setState({error: true})
            })
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render () {
        let posts = <p style={{textAlign: 'center', color: 'red', fontWeight: 'bold'}}>Something went wrong!</p>

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}/>
                )
            })
        }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Blog