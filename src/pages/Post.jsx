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
                        <h1>Upload</h1>
                        <div>
                            icon
                        </div>
                    </div>
                    <div className='post-image'>
                        <div id='text-box'>
                            <input />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;