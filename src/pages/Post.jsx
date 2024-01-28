import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './Post.css'

const Post = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [caption, setCaption] = useState('');
    const [previewURL, setPreviewURL] = useState('');
    const [entries, setEntries] = useState(0);
    const [moodScore, setMoodScore] = useState(3);

    // Function to handle file selection
    const handleFileSelect = (event) => {
        const file = event.target.files[0]; // Get the selected file
        setSelectedFile(file); // Set the selected file
        setPreviewURL(URL.createObjectURL(file)); // Generate preview URL
    };

    const handleCaptionChange = (event) => {
        setCaption(event.target.value);
    };

    // Function to handle mood score change
    const handleMoodScoreChange = (event) => {
        setMoodScore(parseInt(event.target.value)); // Convert value to integer
    };

    // Function to handle form submission
    const handleSubmit = () => {
        // Handle the selected file here
        console.log('Selected file:', selectedFile);
        console.log('Caption:', caption);
        const newEntries = 1 + entries;
        setEntries(newEntries);
        console.log('Entries: ' + entries);
        console.log('Mood score:', moodScore);
        setSelectedFile(null);
        setPreviewURL('');
        setCaption('');
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
                        <div id='scroll-bar'>
                            <label for="score">Pick Mood from 1-5<br />1: Sad, 5: Happy</label>
                            <input type="range" id="score" name="score" min="1" max="5" value={moodScore}
                                onChange={handleMoodScoreChange}></input>
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