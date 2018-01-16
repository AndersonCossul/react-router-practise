import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
    }

    render () {
        const posts = this.state.posts.map(post => {
            return (
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}/>
            )
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;