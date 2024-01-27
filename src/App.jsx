import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className='container-main'>
      <div id='bar'>
        <div className='bar-fill'></div>
      </div>
      <div id='content'>
        <div className='content-item'>
          <div id='item1'><h1>Hello World</h1></div>
          <div id='item2'><h1>Hello World</h1></div>
        </div>
        <div className='content-item'>
          <div id='item1'><h1>Hello World</h1></div>
          <div id='item2'><h1>Hello World</h1></div>
        </div>
        <div className='content-item'>
          <div id='item1'><h1>Hello World</h1></div>
          <div id='item2'><h1>Hello World</h1></div>
        </div>
      </div>
    </div>
  )
}

export default App
