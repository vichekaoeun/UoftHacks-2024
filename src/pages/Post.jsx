import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './Post.css'

const Post = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [caption, setCaption] = useState('');
    const [previewURL, setPreviewURL] = useState('');

    // Function to handle file selection
    const handleFileSelect = (event) => {
        const file = event.target.files[0]; // Get the selected file
        setSelectedFile(file); // Set the selected file
        setPreviewURL(URL.createObjectURL(file)); // Generate preview URL
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
                    {selectedFile && (
                        <div className='preview'>
                            <img src={previewURL} alt='Preview' style={{ maxWidth: '500px', maxHeight: '500px' }} />
                        </div>
                    )}
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