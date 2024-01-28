import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom';
import './Post.css'

const Post = () => {
    return (
        <div className='post-container'>
            <div id='post-content'>
                <div id='post-items'>
                    <div className='up-post'>
                        <h1>Image</h1>
                        <div id='caption'>
                            <p>Caption</p>
                            <input></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header'>
                <h1>Create a Post</h1>
            </div>
            <div className='submit-button'>
                <button>Submit</button>
            </div>
        </div>
    )
}
export default Post;