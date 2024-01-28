import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Post.css'

const Post = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [caption, setCaption] = useState('');

    // Function to handle file selection
    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleCaptionChange = (event) => {
        setCaption(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = () => {
        // Handle the selected file here
        console.log('Selected file:', selectedFile);
        console.log('Caption:', caption);
        // You can upload the file to the server or perform other actions here
    };

    return (
        <div className='post-container'>
            <div id='post-content'>
                <div id='post-items'>
                    <div className='up-post'>
                        <div>
                            <h1>Upload a Photo</h1>
                        </div>
                        <div>
                            <input
                                className='upload-button'
                                type="file"
                                accept="image/*"
                                onChange={handleFileSelect}
                            />
                        </div>
                        <div id='caption'>
                            <p>Caption</p>
                            <input className='caption-input'
                                type="text"
                                value={caption}
                                onChange={handleCaptionChange}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header'>
                <h1>Create a Post</h1>
            </div>
            <div className='submit-button'>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
export default Post;