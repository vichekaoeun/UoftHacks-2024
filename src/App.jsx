import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className='container-main'>
      <div id='bar'>
        <div className='bar-text'>
          <h1 id='home'>Home</h1>
          <p>Welcome Back ____</p>
        </div>
        <div className='bar-fill'></div>
      </div>
      <div className='post-button'>
        <button>Create a Post</button>
      </div>
      <div id='content'>
        <div className='content-item'>
          <div id='calendar-header'>
            <h1>February</h1>
            <div id='calendar-button'>
              <button>
                left
              </button>
              <button>right</button>
            </div>
          </div>
          <div id='calendar'>
          </div>
        </div>
      </div>
      <div id='sidebar'>
        <div className='content-item'>
          <h1>Hello World</h1>
        </div>
      </div>
      <div id='button-container'>
        <div className="button_plus"></div>
      </div>
    </div >
  )
}

export default App
